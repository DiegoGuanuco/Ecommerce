import Link from 'next/link'
import styles from "./CategoryBar.module.css";
import { poppins } from "@/fonts/fontBar";

export function CategoryBar() {
  return (
    <nav className={poppins.className}>
      <ul className={styles.categoryList}>
        <Link href={"/hoodies"}>
        <li className={styles.categoryItem}>BUZOS</li>
        </Link>
        <Link href={"/tshirts"}>
        <li className={styles.categoryItem}>REMERAS</li>
        </Link>
        <li className={styles.categoryItem}>PANTALONES</li>
        <li className={styles.categoryItem}>ACCESORIOS</li>
        <li className={styles.categoryItem}>CALZADO</li>
        <li className={styles.categoryItem}>OFERTAS</li>
      </ul>
    </nav>
  );
}

