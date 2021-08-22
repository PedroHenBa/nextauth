import * as Styled from './styles';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export const Button = ({
  children,
  disabled = false,
  onClick,
  icon,
  color = 'primary',
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Styled.Button disabled={disabled} onClick={handleClick} color={color}>
      {children}
      {!!icon && icon}
    </Styled.Button>
  );
};

export type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  color?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;
