import * as Styled from './styles';
import { ReactNode } from 'react';

export type WrapperProps = {
  children: ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
}
