import "../styles/globals.css";
import Head from "next/head";
import "../public/mentalStopLogo.png"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MentalStop</title>
        <link rel="icon" type="image/x-icon" href="mentalStopLogo.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
