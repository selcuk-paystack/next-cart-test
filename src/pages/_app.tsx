import React from 'react';
import Head from 'next/head';
import 'bulma/css/bulma.css';
import '../styles/globals.scss';
import { CartProvider } from 'contexts/cart/CartContext';
import { CartViewProvider } from 'contexts/cartView/CartViewContext';
import { BuyerInfoProvider } from 'contexts/buyerInfo/BuyerInfoContext';
import { CustomAppProps } from 'types/Page';

function MyApp({ Component, pageProps }: CustomAppProps) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
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
