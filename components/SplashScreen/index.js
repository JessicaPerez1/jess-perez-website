"use client";

import React, { useState, useEffect } from 'react';
import anime from "animejs";
import styles from "./splashScreen.module.css";

export default function SplashScreen({finishLoading}) {
const [isMounted, setIsMounted] = useState(false);

const animate = () => {
  const loader = anime.timeline({
    complete: () => finishLoading()
  })

  loader.add({
    targets: '.container',
    duration: 2000,
    easing: 'easeInOutExpo',
  })
}

  useEffect(()=>{
    const timeout = setTimeout(()=> setIsMounted(true), 500)
    animate()
    return () => clearTimeout(timeout)
  })
  return (
    <div className={styles.containerOuter}>
      <section className={styles.container}>
        <p className={styles.glitch}>
          <span aria-hidden="true"> Jessica Perez | Portfolio </span>
           Jessica Perez | Portfolio
          <span aria-hidden="true"> Jessica Perez | Portfolio </span>
        </p>
      </section>
    </div>
  );
}
