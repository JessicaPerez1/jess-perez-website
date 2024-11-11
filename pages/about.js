import utilStyles from "../styles/utils.module.css";
import aboutInfo from "../data/about.json";

export default function About() {
  return (
    <section className={utilStyles.section}>
      <ul className={utilStyles.list}>
        {aboutInfo.map((item, index) => (
          <li key={index} className={utilStyles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
