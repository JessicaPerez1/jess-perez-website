import Link from "next/link"
import utilStyles from "../styles/utils.module.css";
import fs from 'fs';
import path from 'path';
import { parseISO, format } from "date-fns"

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
          {projects.map(({ id, date, title, href }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link target="_blank" href={`${href}`}>
                <a>
                {title}
                <br />
              <small>
                <time>{format(parseISO(date), "LLLL yyyy")}</time>
              </small>
              </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
  );
}
