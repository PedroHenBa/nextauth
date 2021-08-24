import { GetServerSidePropsContext } from 'next';

export const serverSideRedirect = (
  context: GetServerSidePropsContext,
  redirectTo?: string,
) => {
  const newPath = redirectTo || encodeURI(context.resolvedUrl);

  return {
    props: {},
    redirect: {
      destination: `${process.env['NEXT_PUBLIC_LOGIN_URI']}/?redirect=${newPath}`,
      permanent: false,
    },
  };
};
