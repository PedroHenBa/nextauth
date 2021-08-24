import * as Styled from './styles';
import { ReactNode } from 'react';
import { Menu } from '../Menu';

export type WrapperProps = {
  children: ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  return (
    <Styled.Wrapper>
      <Menu />
      {children}
    </Styled.Wrapper>
  );
}
