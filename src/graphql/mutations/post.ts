import { gql } from 'graphql-request';
import { GQL_FRAGMENT_POST } from '../fragments/post';

export const GQL_MUTATION_CREATE_POST = gql`
  ${GQL_FRAGMENT_POST}
  mutation CREATE_POST($title: String!, $content: String!) {
    createPost(input: { data: { title: $title, content: $content } }) {
      post {
        ...post
      }
    }
  }
`;

export const GQL_MUTATION_UPDATE_POST = gql`
  ${GQL_FRAGMENT_POST}
  mutation UPDATE_POST($title: String, $content: String, $id: ID!) {
    updatePost(
      input: { data: { title: $title, content: $content }, where: { id: $id } }
    ) {
      post {
        ...post
      }
    }
  }
`;

export const GQL_MUTATION_DELETE_POST = gql`
  ${GQL_FRAGMENT_POST}
  mutation DELETE_POST($id: ID!) {
    deletePost(input: { where: { id: $id } }) {
      post {
        ...post
      }
    }
  }
`;
