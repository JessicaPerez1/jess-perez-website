import Head from "next/head";
import styles from "./layout.module.css";

const name = "Jessica";
export const siteTitle = "Jessica Perez Website";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
      <Head>
        <link rel="icon" href="/lightbulb.png" />
        <meta
          name="description"
          content="Jessica Perez website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <h2 className={styles.name}>Jessica Perez-Jacob</h2>
        <p className={styles.title}>software developer at <a href="https://work.co">Work&Co</a></p>
      </header>
      <main>{children}</main>
      </div>
    </div>
  );
}
