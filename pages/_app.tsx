import type { AppProps } from 'next/app';
import Layout from 'layout';
import { globalStyles } from 'styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Layout title="90 Pixel To Do">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
