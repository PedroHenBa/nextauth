import { gql } from 'graphql-request';

export const GQL_MUTATION_AUTHENTICATE_USER = gql`
  mutation AUTHENTICATE_USER($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;
