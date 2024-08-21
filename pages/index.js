import Head from "next/head";

import About from "./about"
import { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
     <section className={`${utilStyles.padding1px} ${utilStyles.section}`}> <About /> </section>
    </>
  );
}
