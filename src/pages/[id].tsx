import { StrapiPost } from '../components/FormPost';
import { PrivateComponent } from '../components/PrivateComponent';
import { UpdatePostTemplate } from '../components/Templates/UpdatePostTemplate';
import { GetServerSideProps } from 'next';
import { gqlClient } from '../graphql/client';
import { GQL_QUERY_GET_POST } from '../graphql/queries/posts';
import { privateServerSideProps } from '../utils/private-server-side-props';

export type PostPageProps = {
  post: StrapiPost;
};

export default function PostPage({ post }: PostPageProps) {
  return (
    <PrivateComponent>
      <UpdatePostTemplate post={post} />
    </PrivateComponent>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await privateServerSideProps(context, async (session) => {
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
  });
};
