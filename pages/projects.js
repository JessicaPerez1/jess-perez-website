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

  return {
    props: {
      projects,
    },
  };
};

Projects.propTypes = {
  projects: PropTypes.func.isRequired,
};

export default function Projects({ projects }) {
  return (
    <section className={utilStyles.section}>
      <ul className={utilStyles.list}>
        {projects.map(({ date, title, href }) => (
          <li className={utilStyles.listItem} key={title}>
            <Link href={`${href}`}>
              <a target="_blank" href={`${href}`}>
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
