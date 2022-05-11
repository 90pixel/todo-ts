import { FC } from 'react';
import { styled } from 'stitches.config';

const Layout: FC = ({ children }) => {
  return (
    <Main>
      <Container>{children}</Container>
    </Main>
  );
};

export default Layout;

const Main = styled('main', {
  display: 'grid',
  placeContent: 'center',
  height: '100vh',
  marginInline: 'auto',
});

const Container = styled('div', {
  width: 500,
  height: 800,
  boxShadow: '$lg',
});
