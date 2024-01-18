import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
export default function App({ Component, pageProps }: AppProps) {
  return(
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
    
    </>)
}