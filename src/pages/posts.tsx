import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/client';
import { Wrapper } from '../components/Wrapper';
import { frontEndRedirect } from '../utils/front-end-redirect';
import { serverSideRedirect } from '../utils/server-side-redirect';
import Link from 'next/link';
import { gqlClient } from '../graphql/client';
import { GQL_QUERY_GET_POSTS } from '../graphql/queries/posts';
import { useEffect, useState } from 'react';
import { GQL_MUTATION_DELETE_POST } from '../graphql/mutations/post';
import { StrapiPost } from '../components/FormPost';

export type PostsPageProps = {
  posts?: StrapiPost[];
};

export default function Posts({ posts = [] }: PostsPageProps) {
  const [session, loading] = useSession();
  const [statePosts, setStatePosts] = useState(posts);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setStatePosts(posts);
  }, [posts]);

  if (!loading && !session) {
    return frontEndRedirect();
  }

  if (typeof window !== 'undefined' && loading) return null;

  const handleDelete = async (id: string) => {
    setDeleting(true);

    try {
      await gqlClient.request(
        GQL_MUTATION_DELETE_POST,
        { id },
        {
          Authorization: `Bearer ${session.accessToken}`,
        },
      );

      setStatePosts((s) => s.filter((p) => p.id !== id));
    } catch (e) {
      alert('Nao foi possivel deletar esse post');
    }
    setDeleting(false);
  };

  return (
    <Wrapper>
      <h1>Ola {session.user.name}</h1>

      {statePosts.map((post) => (
        <p key={'post-' + post.id}>
          <Link href={`/${post.id}`}>
            <a>{post.title}</a>
          </Link>{' '}
          |{' '}
          <button disabled={deleting} onClick={() => handleDelete(post.id)}>
            Excluir
          </button>
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
