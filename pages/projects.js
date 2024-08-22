import Link from "next/link"
import utilStyles from "../styles/utils.module.css";
import fs from 'fs';
import path from 'path';
import Date from "../components/date";

// Generate projects data at build time
export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(fileContents);

  return {
    props: {
      projects,
    },
  };
};

export default function Projects({projects}) {
  return (
    <section className={`${utilStyles.padding1px} ${utilStyles.section}`}>
        <ul className={utilStyles.list}>
          {projects.map(({ date, title, href }) => (
            <li className={utilStyles.listItem} key={title}>
              <Link href={`${href}`}>
                <a target="_blank">
                {title}
                <br />
              <small>
                <Date dateString={date} />
              </small>
              </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
  );
}
