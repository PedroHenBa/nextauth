import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';
import { Provider as NextAuthProvider } from 'next-auth/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextAuthProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </NextAuthProvider>
    </>
  );
}

export default MyApp;
