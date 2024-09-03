import { getProductsService } from "@/services/productService";
import { create } from "zustand";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface ProductStore {
  products: Product[];
  favorites: number;
  getProducts: () => Promise<void>;
  addToFavorites: (id: number) => void;
}

export const useProductsStore = create<ProductStore>((set) => ({
  products: [],
  favorites: 0,
  getProducts: async () => {
    try {
      const response = await getProductsService();
      set({ products: response });
    } catch (error) {
      console.log(error);
      set({ products: [] });
    }
  },
  addToFavorites: (id: number) => {
    set((state) => ({ favorites: state.favorites + 1 }));
  },
}));
