"use client";
import { IProduct } from "@/domian/interfaces/IProduct";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "../ProductCard";
import { useFavorites } from "@/hooks/useFavorites";

export function ProductsList() {
  const { products, loading, error } = useProducts();
  const { handleFavoriteClick } = useFavorites();
  
  return (
    <>
      {/* {loading && <p> Cargando contenido</p>}
      {error && <p>Error:{error}</p>} */}

      {products.tshirts.map((product: IProduct) => {
        return (
          <ProductCard
            key={product.id}
            {...product}
            onFavoriteClick={() => handleFavoriteClick(product)}
          />
        );
      })}
    </>
  );
}
