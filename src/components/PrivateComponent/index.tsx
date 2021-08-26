import { ReactNode } from 'react';
import { useSession } from 'next-auth/client';
import { frontEndRedirect } from '../../utils/front-end-redirect';

export const PrivateComponent = ({ children }: PrivateComponentProps) => {
  const [session, loading] = useSession();

  if (!loading && !session) {
    return frontEndRedirect();
  }

  if (typeof window !== 'undefined' && loading) return null;

  if (!session) {
    return <p>Você não está autenticado</p>;
  }

  return children;
};

export type PrivateComponentProps = {
  children: ReactNode;
};
