import utilStyles from "../styles/utils.module.css";

export default function Info() {
  return (
    <section className={utilStyles.section}>
    <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <a
              title="open linkedin page"
              href="https://www.linkedin.com/in/jessica-p-a13a20b5/"
              rel="noopener noreferrer"
              target="_blank"
            >
             LinkedIn
            </a>
          </li>
          <li className={utilStyles.listItem}>
            <a
              href="/assets/Jess-Perez-CV.pdf"
              title="open resume"
              rel="noopener noreferrer"
              target="_blank"
            >
             CV
            </a>
          </li>
          <li className={utilStyles.listItem}>
            <a
              href="https://github.com/JessicaPerez1"
              title="open github perso"
              rel="noopener noreferrer"
              target="_blank"
            >
             Personal Github
            </a>
          </li>
          <li className={utilStyles.listItem}>
            <a
              href="https://github.com/jesspworkandco"
              title="open github pro"
              rel="noopener noreferrer"
              target="_blank"
            >
             Work Github
            </a>
          </li>
        </ul>
    </section>
  );
}
