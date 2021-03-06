import { FC } from 'react';
import { styled } from 'stitches.config';

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  contentEditable?: boolean;
}

const Title: FC<TitleProps> = ({ children, level = 1, ...props }) => (
  <StyledTitle as={`h${level}`} {...props}>
    {children}
  </StyledTitle>
);

const StyledTitle = styled('h1', {
  fontSize: 28,
  color: '$gray800',
  fontWeight: '$bold',
});

export default Title;
