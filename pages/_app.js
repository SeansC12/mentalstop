import "../styles/globals.css";
import Head from "next/head";
import "../public/mentalStopLogo.png"
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>MentalStop</title>
        <link rel="icon" type="image/x-icon" href="mentalStopLogo.png"></link>
      </Head>
      <script dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-C29B7NDMQ7');`
      }} />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-C29B7NDMQ7"></script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
