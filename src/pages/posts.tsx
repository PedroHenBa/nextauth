import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/client';
import { Wrapper } from '../components/Wrapper';
import { frontEndRedirect } from '../utils/front-end-redirect';
import { serverSideRedirect } from '../utils/server-side-redirect';
import Link from 'next/link';
import { gqlClient } from '../graphql/client';
import { GQL_QUERY_GET_POSTS } from '../graphql/queries/posts';

export type StrapiPost = {
  id?: string;
  title: string;
  content: string;
};

export type PostsPageProps = {
  posts?: StrapiPost[];
};

export default function Posts({ posts = [] }: PostsPageProps) {
  const [session, loading] = useSession();

  if (!loading && !session) {
    return frontEndRedirect();
  }

  if (typeof window !== 'undefined' && loading) return null;

  return (
    <Wrapper>
      <h1>Ola {session.user.name}</h1>

      {posts.map((post) => (
        <p key={'post-' + post.id}>
          <Link href={`/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </p>
      ))}
    </Wrapper>
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
