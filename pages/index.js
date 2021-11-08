import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>I AM PIXEL</title>
        <meta name="description" content="PIXEL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
