import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "Jessica Perez Website";

export default function Layout({ children }) {
  return (
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
        <p className={styles.title}>software developer at <a href="https://work.co">Work&Co</a></p>
      </header>
      <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
