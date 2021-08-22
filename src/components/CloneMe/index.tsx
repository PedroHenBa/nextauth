import * as Styled from './styles';

export const CloneMe = ({ footerHtml }: CloneMeProps) => {
  return <Styled.Container>{footerHtml}</Styled.Container>;
};

export type CloneMeProps = {
  footerHtml: string;
};
