import { FC } from 'react';
import { styled } from 'stitches.config';

interface I_Props {
  variant?: 'description' | 'ghost';
}

const Text: FC<I_Props> = ({ children, variant }) => (
  <StyledText type={variant}>{children}</StyledText>
);

const StyledText = styled('span', {
  fontSize: 18,
  fontWeight: '$regular',
  color: '$gray800',

  variants: {
    type: {
      description: {
        fontSize: 16,
        lineHeight: '160%',
        color: '$gray500',
      },
      ghost: {
        fontSize: 14,
        color: '$gray400',
      },
    },
  },
});

export default Text;
