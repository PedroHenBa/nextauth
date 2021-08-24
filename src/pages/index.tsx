import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/client';
import { Wrapper } from '../components/Wrapper';
import { useEffect, useState } from 'react';

export default function Index() {
  const [session, loading] = useSession();
  const [name, setName] = useState('');

  useEffect(() => {
    if (!loading) {
      setName(session?.user?.name || 'ninguem');
    }
  }, [loading, session]);

  return (
    <Wrapper>
      <h1>Ola {name}</h1>
    </Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
