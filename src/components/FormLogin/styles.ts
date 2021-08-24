import styled, { css } from 'styled-components';

export const Container = styled.form``;

export const ContainerButton = styled.div``;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    background: ${theme.colors.warning};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    border-radius: ${theme.spacings.tiny};
    font-size: ${theme.font.sizes.normal};
  `}
`;
