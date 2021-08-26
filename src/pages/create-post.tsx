import { PrivateComponent } from '../components/PrivateComponent';
import { CreatePostTemplate } from '../components/Templates/CreatePost';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { serverSideRedirect } from '../utils/server-side-redirect';

export default function CreatePost() {
  return (
    <PrivateComponent>
      <CreatePostTemplate />
    </PrivateComponent>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return serverSideRedirect(context);
  }

  return {
    props: {
      session,
    },
  };
};
