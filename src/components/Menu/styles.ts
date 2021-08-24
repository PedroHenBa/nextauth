import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    margin-bottom: ${theme.spacings.xlarge};
    a {
      margin-right: ${theme.spacings.small};
      padding: ${theme.spacings.xsmall} 0;
      display: block;
      text-decoration: none;
    }
  `}
`;
