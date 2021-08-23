import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { gqlClient } from '../../../graphql/client';
import { GQL_MUTATION_AUTHENTICATE_USER } from '../../../graphql/mutations/auth';

export default NextAuth({
  jwt: {
    signingKey: process.env['JWT_SIGNING_PRIVATE_KEY'],
  },
  secret: process.env['NEXT_AUTH_SECRET '],
  session: {
    jwt: true,
    maxAge: 7 * 24 * 60 * 60,
  },
  providers: [
    Providers.Credentials({
      name: 'Strapi-auth',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Digite seu userName' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { login } = await gqlClient.request(GQL_MUTATION_AUTHENTICATE_USER, {
            email: credentials.email,
            password: credentials.password,
          });

          const { jwt, user } = login;
          const { id, username, email } = user;

          if (!jwt || !id || !username || !email) {
            return null;
          } else {
            return {
              jwt,
              id,
              name: username,
              email,
            };
          }
        } catch (e) {
          console.log(e);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      const isSignIn = !!user;
      const actualDateInSeconds = Math.floor(Date.now() / 1000);
      const tokenExpirationInSeconds = Math.floor(7 * 24 * 60 * 60);

      if (isSignIn) {
        if (!user.jwt || !user.name || !user.email || !user.id) {
          return Promise.resolve({});
        }
        token.jwt = user.jwt;
        token.id = user.id;
        token.expiration = Math.floor(actualDateInSeconds + tokenExpirationInSeconds);
      } else {
        if (!token?.expiration) {
          return Promise.resolve({});
        }

        if (actualDateInSeconds >= token.expiration) {
          return Promise.resolve({});
        }
      }
      return Promise.resolve(token);
    },
  },
});