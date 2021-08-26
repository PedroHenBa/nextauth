import { useSession } from 'next-auth/client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { StrapiPost } from '../../FormPost';
import { gqlClient } from '../../../graphql/client';
import { GQL_MUTATION_DELETE_POST } from '../../../graphql/mutations/post';
import { Wrapper } from '../../Wrapper';

export type PostsTemplateProps = {
  posts?: StrapiPost[];
};

export function PostsTemplate({ posts = [] }: PostsTemplateProps) {
  const [session] = useSession();
  const [statePosts, setStatePosts] = useState(posts);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setStatePosts(posts);
  }, [posts]);

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
