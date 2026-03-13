import utilStyles from "../styles/utils.module.css";

export default function About() {
  // Use require to avoid dynamic import in client components
  const aboutInfo = require("../data/about.json");
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
