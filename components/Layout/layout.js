"use client";

import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import SplashScreen from "../SplashScreen";
import Menu from "../Menu";
// import { usePathname } from 'next/navigation'

export const siteTitle = "Jessica Perez Website";

// export async function getStaticProps() {
//   const pathname = usePathname()
//   return {
//     pathname,
//   }
// }

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default function Layout({ children }) {
  // TODO: fix using pathname
  // const pathname = getStaticProps();
  const isHome = "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return isLoading && isHome ? (
    <SplashScreen finishLoading={() => setIsLoading(false)} />
  ) : (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Head>
          <link rel="icon" href="/tv-glitch.png" />
          <meta name="description" content="Jessica Perez website" />
          <meta name="og:title" content={siteTitle} />
          <meta property="og:image" content="/tv-glitch.png" />
        </Head>
        <header className={styles.header}>
          <h2 className={styles.name}>Jessica Perez-Jacob</h2>
          <p className={styles.title}>
            Software developer at <a href="https://work.co">Work&Co</a>
          </p>
          <Menu />
        </header>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
