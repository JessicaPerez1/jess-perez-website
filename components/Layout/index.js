"use client";

import React, { useState, useEffect } from 'react';
import Head from "next/head";
import styles from "./layout.module.css";
import SplashScreen from "../SplashScreen";

export const siteTitle = "Jessica Perez Website";

export default function Layout({ children }) {
  const isHome = '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(()=> {
    if(isLoading) return
  }, [isLoading]);

  return (
    isLoading && isHome ? (
      <SplashScreen finishLoading={()=> setIsLoading(false)}/>
     ):(
    <div className={styles.container}>
      <div className={styles.innerContainer}>
      <Head>
        <link rel="icon" href="/tv-glitch.png" />
        <meta
          name="description"
          content="Jessica Perez website"
        />
        <meta
          property="og:image"
          content= {` ${siteTitle} /tv-glitch.png`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <h2 className={styles.name}>Jessica Perez-Jacob</h2>
        <p className={styles.title}>Software developer at <a href="https://work.co">Work&Co</a></p>
      </header>
      <main className={styles.main}>{children}</main>
      </div>
    </div>
     )
  );
}
