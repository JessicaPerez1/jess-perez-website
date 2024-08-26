import { GoArrowUpRight } from "react-icons/go";
import utilStyles from "../styles/utils.module.css";

export default function Contact() {
  return (
    <section className={utilStyles.section}>
    <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <a
              title="send jessica perez an email"
              href="mailto:1jessicaperez@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Email
              <GoArrowUpRight />
            </a>
          </li>
        </ul>
    </section>
  );
}
