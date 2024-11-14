"use client";

import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import anime from "animejs";
import styles from "./splashScreen.module.css";

SplashScreen.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default function SplashScreen({ finishLoading }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const animate = () => {
      const loader = anime.timeline({
        complete: () => finishLoading(),
      });

      loader.add({
        targets: ".container",
        duration: 2000,
        easing: "easeInOutExpo",
      });
    };

    const timeout = setTimeout(() => setIsMounted(true), 500);
    animate();
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div className={styles.containerOuter}>
      <section className={styles.container}>
        <p className={styles.glitch}>
          <span aria-hidden="true"> Jessica Perez-Jacob </span>
          Jessica Perez-Jacob
          <span aria-hidden="true"> Jessica Perez-Jacob </span>
        </p>
      </section>
    </div>
  );
}
