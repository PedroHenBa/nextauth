import { useSession } from 'next-auth/client';
import { Wrapper } from '../../Wrapper';

export function HomeTemplate() {
  const [session] = useSession();

  return (
    <Wrapper>
      <h1>Ola {session?.user?.name || 'ninguém'}</h1>
    </Wrapper>
  );
}
