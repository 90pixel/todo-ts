import type { AppProps } from 'next/app';
import { globalStyles } from 'styles/globals';
import Layout from 'components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Layout title="90 Pixel To Do">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
