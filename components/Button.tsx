import { FC } from 'react';
import { styled } from 'stitches.config';

interface ButtonProps {
  variant?: 'primary' | 'ghost';
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
}) => (
  <CustomButton type={variant} onClick={onClick}>
    {children}
  </CustomButton>
);

export default Button;

const CustomButton = styled('button', {
  color: '$gray200',

  variants: {
    type: {
      primary: {
        p: 4,
        radius: 30,
        background: '$primary',
      },
      ghost: {
        background: 'none',
        color: '$gray400',
      },
    },
  },
});
