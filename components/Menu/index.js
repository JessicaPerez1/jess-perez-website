import styles from "./menu.module.css";
import Link from "next/link";

export default function Menu({  }) {
  const menuItems = [{name:"About", href:"/about"}, {name:"Projects", href:"/projects"}, {name:"Contact", href:"/contact"}];

  return (
    <ul className={styles.menu} >
    {menuItems.map((item, index) => (
        <li key={index} >
          <Link className={styles.link} href={item.href}>
           {item.name}
          </Link>
        </li>
    ))}
    </ul>
  );
}
