"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./menu.module.css";

const menuItems = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Info", href: "/info" },
  { name: "Contact", href: "/contact" },
];

export default function Menu() {
  // TO DO: fix strikethrough current menu/project selection to persist on click
  // const [selectedIndex, setSelectedIndex] = useState(null);
  // const handleClick = (index) => {
  //   setSelectedIndex(index); // Set the index of the selected link
  // };

  return (
    <ul className={styles.menu}>
      {menuItems.map((item) => (
        <li key={item.name}>
          <Link
            // onClick={handleClick(item.name)}
            // className={selectedIndex === item.name ? styles.strikeThrough : ""}
            href={item.href}
          >
            <a key={item.name}>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
