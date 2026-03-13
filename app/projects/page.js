import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import fs from "fs";
import path from "path";
import DateComponent from "../../components/date";

export default async function Projects() {
  // Read data directly in the component (server component)
  const filePath = path.join(process.cwd(), "data", "projects.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const projects = JSON.parse(fileContents);

  return (
    <section className={utilStyles.section}>
      <ul className={utilStyles.list}>
        {projects?.length &&
          projects.map(({ date, title, href }) => (
            <li className={utilStyles.listItem} key={title}>
              <Link href={href} target="_blank" rel="noopener noreferrer">
                <span className={utilStyles.projectTitleNoBreak}>{title}</span>
                <br />
                <small>
                  <DateComponent dateString={date} />
                </small>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
