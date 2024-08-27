import Head from "next/head";
import About from "./about"
import { siteTitle } from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <About />
    </>
  );
}
