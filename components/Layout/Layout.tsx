import { FC } from 'react';
import Head from 'next/head';
import { styled } from 'stitches.config';

interface LayoutProps {
  title: string;
  className?: string;
}

const Layout: FC<LayoutProps> = ({
  title = '90Pixel To Do',
  children,
  className,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container className={className}>
        <ContentLayout>
          <ContentContainer>{children}</ContentContainer>
        </ContentLayout>
      </Container>
    </>
  );
};

export default Layout;

export const Container = styled('div', {
  minHeight: '100vh',
  width: '100%',
  backgroundColor: '$primary',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ContentLayout = styled('div', {
  width: '479px',
  height: '90vh',
  backgroundColor: '$gray50',
  borderRadius: '$2xl',
});

export const ContentContainer = styled('div', {
  p: 20,
});
