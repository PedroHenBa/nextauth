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
    return null;
  }

  return children;
};

export type PrivateComponentProps = {
  children: ReactNode;
};
