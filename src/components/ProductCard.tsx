import { IAllProducts, IProduct } from "@/domian/interfaces/IProduct";
import { IoMdHeartEmpty } from "react-icons/io";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import Link from 'next/link'

interface ProductCardProps extends IProduct {
  onFavoriteClick?: () => void;
  categoryclothes?: keyof IAllProducts
}

export const ProductCard = ({
  id,
  name,
  price,
  image,
  categoryclothes,
  onFavoriteClick,
}: ProductCardProps) => {
  return (
    <div>
      <ul className={styles.productList}>
        <li className={styles.card}>
          <div>
            <Image src={image} alt={name} width={200} height={200} />
          </div>
          <div>
            <IoMdHeartEmpty size={25} onClick={onFavoriteClick} />
            <h3>{name}</h3>
            <p>{price}</p>
          </div>
         
            <Link href={`${categoryclothes}/${id}`}>Ver más</Link>
        
        </li>
      </ul>
    </div>
  );
};
