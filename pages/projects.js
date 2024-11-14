import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import fs from "fs";
import path from "path";
import DateComponent from "../components/date";
import PropTypes from "prop-types";

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const projects = JSON.parse(fileContents);
  console.info("PROJECTS", projects);
  return {
    props: {
      projects,
    },
  };
};

Projects.propTypes = {
  projects: PropTypes.array,
};

export default function Projects({ projects }) {
  return (
    <section className={utilStyles.section}>
      <ul className={utilStyles.list}>
        {projects?.length &&
          projects.map(({ date, title, href }) => (
            <li className={utilStyles.listItem} key={title}>
              <Link href={`${href}`}>
                <a target="_blank">
                  {title}
                  <br />
                  <small>
                    <DateComponent dateString={date} />
                  </small>
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
