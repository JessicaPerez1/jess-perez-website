import Link from "next/link";
import styles from "./menu.module.css";

export default function Menu() {
  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Info", href: "/info" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <ul className={styles.menu}>
      {menuItems.map((item) => (
        <li className={styles.listItem} key={item.name}>
          <Link className={styles.link} href={item.href}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
