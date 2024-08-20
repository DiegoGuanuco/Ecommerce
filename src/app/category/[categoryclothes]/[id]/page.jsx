"use client";
import { useAppSelector } from "@/redux/hooks";
import { ProductDetail } from "@/components/ProductDetail";
import { useFavorites } from "@/hooks/useFavorites";
import { useProducts } from "@/hooks/useProducts";

export default function PageDetail({ params }) {
  const { categoryclothes, id } = params;
  const { handleFavoriteClick } = useFavorites();
  useProducts();

  const productCategory = useAppSelector(
    (state) => state.products.products[categoryclothes]
  );
  const productDetail = productCategory.find((product) => product.id === +id);

  return (
    <ProductDetail
      {...productDetail}
      onFavoriteClick={() => handleFavoriteClick(productDetail)}
    />
  );
}
