import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productSlice";
import faviritesSlice from './features/favoriteSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: faviritesSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch