import Link from "next/link";
import styles from "./CategoryBar.module.css";
import { poppins } from "@/fonts/fontBar";

export function CategoryBar() {
  return (
    <nav className={poppins.className}>
      <ul className={styles.categoryList}>
        <li className={styles.categoryItem}>
          <Link href="/category/hoodies">BUZOS</Link>
        </li>
        <li className={styles.categoryItem}>
          <Link href="/category/tshirts">REMERAS</Link>
        </li>
        <li className={styles.categoryItem}>
          <Link href="/category/pants">PANTALONES</Link>
        </li>
        <li className={styles.categoryItem}>
          <Link href="/category/accesories">ACCESORIOS</Link>
        </li>
        <li className={styles.categoryItem}>
          <Link href="/category/footwear">CALZADO</Link>
        </li>
        <li className={styles.categoryItem}>OFERTAS</li>
      </ul>
    </nav>
  );
}
