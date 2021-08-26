import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { serverSideRedirect } from '../utils/server-side-redirect';
import { gqlClient } from '../graphql/client';
import { GQL_QUERY_GET_POSTS } from '../graphql/queries/posts';
import { StrapiPost } from '../components/FormPost';
import { PrivateComponent } from '../components/PrivateComponent';
import { PostsTemplate } from '../components/Templates/Posts';

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
  const session = await getSession(context);

  if (!session) {
    return serverSideRedirect(context);
  }

  try {
    const { posts } = await gqlClient.request(GQL_QUERY_GET_POSTS, null, {
      Authorization: `Bearer ${session.accessToken}`,
    });

    return {
      props: {
        session,
        posts,
      },
    };
  } catch (e) {
    return serverSideRedirect(context);
  }
};
