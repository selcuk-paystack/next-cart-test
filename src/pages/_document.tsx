import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Buy something" />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="" />
          <meta name="og:description" property="og:description" content="" />
          <meta property="og:site_name" content="" />
          <meta property="og:url" content="" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="" />
          <meta name="twitter:description" content="Buy something" />
          <meta name="twitter:site" content="" />
          <meta name="twitter:creator" content="" />
          <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
          <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
          <link rel="stylesheet" href="" />
          <meta property="og:image" content="" />
          <meta name="twitter:image" content="" />
          <link rel="canonical" href="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
