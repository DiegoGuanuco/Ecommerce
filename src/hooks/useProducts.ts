"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setProducts,
  setLoading,
  setError,
} from "@/redux/features/productSlice";
import { getProducts } from "@/services/productService";
import { useEffect } from "react";

export const useProducts = () => {
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading());
      try {
        console.log("fetchProducts");
        const allClothes = await getProducts();
        console.log("allClothes", allClothes);
        dispatch(setProducts(allClothes));
      } catch (error) {
        console.log("error", error);
        dispatch(setError());
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Ocurrió un error inesperado";
        throw new Error(`Error desde getAllProducts: ${errorMessage}`);
      } finally {
        dispatch(setLoading());
      }
    };

    fetchProducts();
  }, [dispatch]);

  return { products, loading, error };
};
