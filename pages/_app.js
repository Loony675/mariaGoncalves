import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import
 { Analytics } 
from
 
'@vercel/analytics/react'
;
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Maria Goncalves</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Analytics/>
      <Footer />
    </>
  );
}
