import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { Favorites } from "../favorites/Favorites";

export function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>Inicio</li>
        <li className={styles.navbarItem}>Segundo</li>
        <li className={styles.navbarItem}>Tercero</li>
        <li className={styles.navbarItem}>
          <Link href={"/myFavorite"}>
            <Favorites />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
