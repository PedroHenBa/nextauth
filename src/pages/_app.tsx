import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
