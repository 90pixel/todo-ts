import { FC } from 'react';
import { styled } from 'stitches.config';

interface I_Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: FC<I_Props> = ({ children, level = 1 }) => (
  <StyledTitle as={`h${level}`}>{children}</StyledTitle>
);

const StyledTitle = styled('h1', {
  color: '$gray800',
  fontWeight: '$bold',
});

export default Title;
