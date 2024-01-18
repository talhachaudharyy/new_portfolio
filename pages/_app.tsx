// pages/_app.js

import Head from 'next/head';
import '../styles/globals.css'; // Import your global styles here
import Image from 'next/image';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Talha | Portfolio</title>


        <link rel="icon" href="/picofme.png" />

        {/* Add the link to Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
