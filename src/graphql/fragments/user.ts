import { gql } from 'graphql-request';

export const GQL_FRAGMENT_USER = gql`
  fragment user on UsersPermissionsUser {
    id
    username
    email
  }
`;
