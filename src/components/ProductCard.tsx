import { IProduct } from "@/domian/interfaces/IProduct";
import { IoMdHeartEmpty } from "react-icons/io";
import Image from "next/image";
import styles from "./ProductCard.module.css";

interface ProductCardProps extends IProduct {
  onFavoriteClick?: () => void;
}

export const ProductCard = ({
  name,
  price,
  image,
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
        </li>
      </ul>
    </div>
  );
};
