import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/client';

export default function Index() {
  const [session] = useSession();

  return (
    <h1>
      <span>Salve {session && JSON.stringify(session, null, 2)}</span>
    </h1>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
