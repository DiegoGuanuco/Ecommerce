import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addFavorite, removeFavorite } from "@/redux/features/favoriteSlice";
import { IProduct } from "@/domian/interfaces/IProduct";

export const useFavorites = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.favoritesProducts);
  
  const handleFavoriteClick = (product: IProduct) => {
    const isFavorite = () =>
      favorites.some(
        (productInFavorite) => productInFavorite.id === product.id
      );
  
      if (isFavorite()) {
      dispatch(removeFavorite(product));
    } else {
      dispatch(addFavorite(product));
    }
  };
  
  return { handleFavoriteClick };
};
