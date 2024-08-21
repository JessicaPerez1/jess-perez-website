import styles from "./contact.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Contact() {
  return (
    <section className={utilStyles.section}>
    <ul className={styles.connect}>
          <li>
            <a
              className={styles.item}
              title="send jessica perez an email"
              href="mailto:1jessicaperez@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Email
            </a>
          </li>
          <li>
            <a
              className={styles.item}
              title="open linkedin page"
              href="https://www.linkedin.com/in/jessica-p-a13a20b5/"
              rel="noopener noreferrer"
              target="_blank"
            >
             LinkedIn
            </a>
          </li>
          <li>
            <a
              className={styles.item}
              href="/assets/Jess-Perez-CV.pdf"
              title="open resume"
              rel="noopener noreferrer"
              target="_blank"
            >
             CV
            </a>
          </li>
        </ul>
    </section>
  
  );
}
