import { AppProps } from 'next/app';
import Head from 'next/head';
import 'bulma/css/bulma.css';
import '../styles/globals.scss';
import { CartProvider } from 'contexts/cart/CartContext';
import { CartViewProvider } from 'contexts/cartView/CartViewContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartProvider>
        <CartViewProvider>
          <Component {...pageProps} />
        </CartViewProvider>
      </CartProvider>
    </>
  );
}

export default MyApp;
