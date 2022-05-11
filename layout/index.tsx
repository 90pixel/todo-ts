import { FC } from 'react';
import Head from 'next/head';
import { styled } from 'stitches.config';

interface LayoutProps {
  title: string;
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <Main>
      <Head>
        <title>{title}</title>
      </Head>
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
  padding: '$sp84',
  boxShadow: '$lg',
});
