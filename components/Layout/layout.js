"use client";

import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import styles from "./layout.module.css";
import SplashScreen from "../SplashScreen";
import Menu from "../Menu";

export const siteTitle = "Jessica Perez Website";

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};
// TODO: fix html nesting error
export default function Layout({ children }) {
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
