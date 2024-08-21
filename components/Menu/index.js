import { useState } from "react";
import styles from "./menu.module.css";
import Link from "next/link";

export default function Menu({  }) {
  const menuItems = [{name:"About", href:"/about"}, {name:"Projects", href:"/projects"}, {name:"Contact", href:"/contact"}];

  const [selectedItem, setSelectedItem] = useState(false);

  return (
    <ul className={ `${styles.menu} ${selectedItem ? 'selected' : ''}`} >

{menuItems.map((item)=> (
    <li key={item.name} onClick={() => setSelectedItem(true)}>
       <Link href={`${item.href}`}>
         <a>{item.name}</a>
       </Link>
    </li>
))}
    </ul>
  );
}
