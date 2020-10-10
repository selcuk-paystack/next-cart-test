import React from 'react';
import Head from 'next/head';
import 'bulma/css/bulma.css';
import '../styles/globals.scss';
import { CartProvider } from 'contexts/cart/CartContext';
import { CartViewProvider } from 'contexts/cartView/CartViewContext';
import { BuyerInfoProvider } from 'contexts/buyerInfo/BuyerInfoContext';
import { CustomAppProps } from 'types/Page';

function MyApp({ Component, pageProps }: CustomAppProps) {
  const Layout = Component.Layout ?? React.Fragment;

  return (
    <>
      <Head>
        <title>Products</title>
        {/* https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CartProvider>
        <CartViewProvider>
          <BuyerInfoProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </BuyerInfoProvider>
        </CartViewProvider>
      </CartProvider>
    </>
  );
}

export default MyApp;
