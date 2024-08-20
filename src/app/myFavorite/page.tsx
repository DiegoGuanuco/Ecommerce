"use client";
import { ProductCard } from "@/components/ProductCard";
import { IProduct } from "@/domian/interfaces/IProduct";
import { useFavorites } from "@/hooks/useFavorites";
import { useAppSelector } from "@/redux/hooks";

export default function MyFavoritePage() {
  
  const favorites = useAppSelector(
    (state) => state.favorites.favoritesProducts
  );

  const {handleFavoriteClick} = useFavorites()

  return (
    <>
      {favorites.map((product: IProduct) => {
        return <ProductCard key={product.id} {...product} onFavoriteClick={() => handleFavoriteClick(product)}/>;
      })}
    </>
  );
}
