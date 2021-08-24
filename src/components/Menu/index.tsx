import * as Styled from './styles';
import Link from 'next/link';
import { MouseEvent, useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/client';

export const Menu = () => {
  const [session] = useSession();
  const [redirect, setRedirect] = useState();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setRedirect(encodeURI(window.location.pathname));
  }, []);

  const handleClick = async (event: MouseEvent) => {
    event.preventDefault();
    await signOut({ redirect: false });
  };
  return (
    <Styled.Container>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Link href="/create-post">
        <a>Create post</a>
      </Link>

      {session ? (
        <a href="#" onClick={handleClick}>
          Sair
        </a>
      ) : (
        <Link href={{ pathname: '/login', query: { redirect } }}>
          <a>Login</a>
        </Link>
      )}
    </Styled.Container>
  );
};
