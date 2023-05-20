import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import QuiSuisJe from "@/components/QuiSuisJe";
import Prestations from "@/components/Prestations";
import Formations from "@/components/Formations";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maria Goncalves</title>
        <meta name="description" content="Maria Goncalves" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainContainer}>
        <section>
          <Prestations/>
        </section>
        <section id="me">
          <QuiSuisJe />
        </section>
        <section id="prestations">
         <Formations/>
        </section>
        <section id="contactMe">
         <Contact/>
        </section>

      </div>
    </>
  );
}
