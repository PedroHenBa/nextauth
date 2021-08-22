import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-size: 1.6rem;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    margin: ${({ theme }) => theme.spacing.big} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacing.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacing.medium};
    padding: ${({ theme }) => theme.spacing.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  .table {
    width: 100%;
    overflow-y: auto ;
  }

`;
