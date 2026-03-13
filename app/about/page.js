import utilStyles from "../../styles/utils.module.css";

export default async function About() {
    const aboutInfo = (await import("../../data/about.json")).default;
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
