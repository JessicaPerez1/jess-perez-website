import Head from "next/head";
import About from "./about";
import { siteTitle } from "../components/Layout/layout";

export default function Home() {
  return (
    <html lang="en">
      <Head>
        <title> Jessica Perez Portfolio</title>
        <link rel="icon" href="/tv-glitch.png" />
        <meta name="description" content="Jessica Perez website" />
        {/* <meta property="og:image" content="/tv-glitch.png" /> */}
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/
        ${`tv-glitch.png`}?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:image" content="/tv-glitch.png" />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:image" content="/tv-glitch.png" />
      </Head>
      <body>
        <About />
      </body>
    </html>
  );
}
