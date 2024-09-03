import { getCategoryService } from "@/services/categoryService";
import { create } from "zustand";

interface CategoryStore {
  categories: string[];
  getCategories: () => Promise<void>;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  getCategories: async () => {
    try {
      const response = await getCategoryService();
      console.log(response);
      set({ categories: response });
    } catch (error) {
      console.log(error);
      set({ categories: [] });
    }
  },
}));
function getCategories() {
  throw new Error("Function not implemented.");
}
