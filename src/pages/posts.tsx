import { GetServerSideProps } from 'next';
import { gqlClient } from '../graphql/client';
import { GQL_QUERY_GET_POSTS } from '../graphql/queries/posts';
import { StrapiPost } from '../components/FormPost';
import { PrivateComponent } from '../components/PrivateComponent';
import { PostsTemplate } from '../components/Templates/Posts';
import { privateServerSideProps } from '../utils/private-server-side-props';

export type PostsPageProps = {
  posts?: StrapiPost[];
};

export default function Posts({ posts = [] }: PostsPageProps) {
  return (
    <PrivateComponent>
      <PostsTemplate posts={posts} />
    </PrivateComponent>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await privateServerSideProps(context, async (session) => {
    const { posts } = await gqlClient.request(GQL_QUERY_GET_POSTS, null, {
      Authorization: `Bearer ${session.accessToken}`,
    });

    return {
      props: {
        session,
        posts,
      },
    };
  });
};
