import { Wrapper } from '../components/Wrapper';
import { FormPost, StrapiPost } from '../components/FormPost';
import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/client';
import { serverSideRedirect } from '../utils/server-side-redirect';
import { gqlClient } from '../graphql/client';
import { GQL_QUERY_GET_POST } from '../graphql/queries/posts';
import { frontEndRedirect } from '../utils/front-end-redirect';
import { GQL_MUTATION_UPDATE_POST } from '../graphql/mutations/post';

export type PostPageProps = {
  post: StrapiPost;
};

export default function PostPage({ post }: PostPageProps) {
  const [session, loading] = useSession();

  const onCreate = async (post) => {
    try {
      await gqlClient.request(
        GQL_MUTATION_UPDATE_POST,
        { ...post },
        {
          Authorization: `Bearer ${session.accessToken}`,
        },
      );
    } catch (e) {
      alert('Nao foi possivel deletar esse post');
    }
  };

  if (!loading && !session) {
    return frontEndRedirect();
  }

  if (typeof window !== 'undefined' && loading) return null;

  return (
    <Wrapper>
      <FormPost post={post} onCreate={onCreate} />
    </Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return serverSideRedirect(context);
  }

  try {
    const { post } = await gqlClient.request(
      GQL_QUERY_GET_POST,
      { id: context.params.id },
      {
        Authorization: `Bearer ${session.accessToken}`,
      },
    );

    return {
      props: {
        session,
        post,
      },
    };
  } catch (e) {
    return serverSideRedirect(context);
  }
};
