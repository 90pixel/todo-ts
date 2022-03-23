import { FC } from 'react';
import { styled } from 'stitches.config';

interface ButtonProps {
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <CustomButton onClick={onClick}>{children}</CustomButton>
);

export default Button;

const CustomButton = styled('button', {
  background: '$primary',
  color: '$gray200',
  p: 4,
  radius: 30,
});
