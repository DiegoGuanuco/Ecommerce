"use client";
import { ProductCard } from "@/components/ProductCard";
import { IProduct } from "@/domian/interfaces/IProduct";
import { useAppSelector } from "@/redux/hooks";

export default function MyFavoritePage() {
  
  const favorites = useAppSelector(
    (state) => state.favorites.favoritesProducts
  );

  return (
    <>
      {favorites.map((product: IProduct) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </>
  );
}
