import { GetServerSidePropsContext } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/client';
import { serverSideRedirect } from './server-side-redirect';

export const privateServerSideProps = async <T>(
  context: GetServerSidePropsContext,
  callBackFn: (session: Session) => Promise<T>,
) => {
  const session = await getSession(context);

  if (!session) {
    return serverSideRedirect(context);
  }

  try {
    const result = await callBackFn(session);
    return result;
  } catch (e) {
    return serverSideRedirect(context);
  }
};
