"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./menu.module.css";

const menuItems = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Info", href: "/info" },
  { name: "Contact", href: "/contact" },
];


export default function Menu() {
  const pathname = usePathname();

  return (
    <ul className={styles.menu}>
      {menuItems.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            key={item.name}
            className={`menuLink${pathname === item.href ? ' ' + styles.strikeThrough : ''}`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
