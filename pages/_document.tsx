import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <meta
            name="description"
            content="Wigatap Foundation"
          />
          <meta property="og:site_name" content="" />
          <meta
            property="og:description"
            content="Wigatap Foundation."
          />
          <meta property="og:title" content="Wigatap Foundation" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Wigatap Foundation" />
          <meta
            name="twitter:description"
            content="Wigatap Foundation."
          />
          <meta
            property="og:image"
            content=""
          />
          <meta
            name="twitter:image"
            content=""
          />
        </Head>
        <body className="bg-secondary-black overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
