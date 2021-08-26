import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';
import { Provider as NextAuthProvider } from 'next-auth/client';
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextAuthProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <NextNprogress
            color={theme.colors.info}
            startPosition={0.3}
            stopDelayMs={200}
            height={10}
            showOnShallow={true}
          />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </NextAuthProvider>
    </>
  );
}

export default MyApp;
