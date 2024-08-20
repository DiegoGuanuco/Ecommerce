"use client";
import { ProductCard } from "@/components/ProductCard";
import { IAllProducts } from "@/domian/interfaces/IProduct";
import { useFavorites } from "@/hooks/useFavorites";
import { useProducts } from "@/hooks/useProducts";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

interface PageProps {
  params: {
    categoryclothes: keyof IAllProducts;
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const { categoryclothes } = params;
  useProducts()

  const products = useAppSelector(
    (state) => state.products.products[categoryclothes]
  );

  const { handleFavoriteClick } = useFavorites();

  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          categoryclothes={categoryclothes}
          onFavoriteClick={() => handleFavoriteClick(product)}
        />
      ))}
    </>
  );
}
