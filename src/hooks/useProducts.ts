"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setProducts,
  setLoading,
  setError,
} from "@/redux/features/productSlice";
import { getAllProducts } from "@/services/productAdapter";
import { useEffect } from "react";

export const useProducts = () => {
  const { products, loading, error } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
  const fetchProducts = async () => {
    dispatch(setLoading());

    try {
      const allClothes = await getAllProducts();
      dispatch(setProducts(allClothes));
    } catch (error) {
      dispatch(setError());
      const errorMessage = error instanceof Error ? error.message : "Ocurrió un error inesperado";
      throw new Error(`Error desde getAllProducts: ${errorMessage}`);
    } finally {
      dispatch(setLoading());
    }
  };

  
    fetchProducts();
  }, [dispatch]);

  return { products, loading, error };
};
