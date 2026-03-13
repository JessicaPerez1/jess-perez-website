import "../styles/global.css";

import Link from "next/link";
import styles from "../components/Layout/layout.module.css";
import Menu from "../components/Menu";

export const metadata = {
  title: "Jessica Perez Website",
  description: "Jessica Perez Portfolio and Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <header className={styles.header}>
              <h2 className={`${styles.name} ${styles.headerNoBreak}`}>
                <Link href="/about" className={styles.name} style={{ color: "inherit", textDecoration: "none" }}>
                  Jessica Perez-Jacob
                </Link>
              </h2>
              <p className={`${styles.title} ${styles.headerNoBreak}`}>
                Software developer at <a href="https://work.co">Work&Co</a>
              </p>
              <Menu />
            </header>
            <main className={styles.main}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
