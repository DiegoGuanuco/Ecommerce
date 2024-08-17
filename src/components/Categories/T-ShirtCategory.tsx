'use client'
import { useAppSelector } from "@/redux/hooks";
import { ProductCard } from "../ProductCard";
import { useFavorites } from "@/hooks/useFavorites";

export function TShirtCategory() {
  const tshirts = useAppSelector((state) => state.products.products.tshirts);
  const { handleFavoriteClick } = useFavorites();
  
  return (
    <>
      {tshirts.map((tshirt) => (
        <ProductCard
          key={tshirt.id}
          {...tshirt}
          onFavoriteClick={() => handleFavoriteClick(tshirt)}
        />
      ))}
    </>
  );
}
