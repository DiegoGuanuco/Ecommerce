import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";

import { IProduct } from "@/domian/interfaces/IProduct";

export function ProductDetail({
  name,
  price,
  image,
  color,
  description,
  onFavoriteClick,
}: IProduct) {
  return (
    <div>
      <ul>
        <li>
          <div>
            <Image src={image} alt={name} width={200} height={200} />
            <p>{color}</p>
            <p>{description}</p>
          </div>
          <div>
            <h3>{name}</h3>
            <p>{price}</p>
          </div>
          <IoMdHeartEmpty size={25} onClick={onFavoriteClick} />
        </li>
      </ul>
    </div>
  );
}
