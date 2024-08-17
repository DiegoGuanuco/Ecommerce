import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFavoriteProduct } from "@/domian/interfaces/IFavoritesProducts";
import { IProduct } from "../../domian/interfaces/IProduct";

const initialState: IFavoriteProduct = {
  counter: 0,
  favoritesProducts: [],
};

const isProductInFavorites = (state: IFavoriteProduct, id: number) => {
  return state.favoritesProducts.some((product) => product.id === id);
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<IProduct>) {
      const { id } = action.payload;

      if (!isProductInFavorites(state, id)) {
        state.counter++;
        state.favoritesProducts.push(action.payload);
      }
    },
    removeFavorite(state, action: PayloadAction<IProduct>) {
      const { id } = action.payload;

      if (isProductInFavorites(state, id)) {
        state.counter--;
        state.favoritesProducts = state.favoritesProducts.filter(
          (product) => product.id !== id
        );
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
