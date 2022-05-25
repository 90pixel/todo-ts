import { FC } from 'react';
import { styled } from 'stitches.config';

interface TextProps {
  variant?: 'description' | 'ghost';
  contentEditable?: boolean;
  as?: React.ReactNode;
}

const Text: FC<TextProps> = ({ children, variant, ...props }) => (
  <StyledText type={variant} {...props}>
    {children}
  </StyledText>
);

const StyledText = styled('span', {
  fontSize: 18,
  fontWeight: '$regular',
  color: '$gray800',
  lineBreak: 'anywhere',

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
