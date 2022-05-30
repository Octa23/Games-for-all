import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CustomToast } from "../components/Utils";
import {
  addFavorite,
  removeFavorite,
} from "../store/reducers/favoritesReducer";
import { Games } from "../types";

const useFavorites = (game: Games) => {
  const dispatch = useDispatch();
  const { Favorites } = useSelector((state: any) => state.favorites);
  localStorage.setItem("favorites", JSON.stringify(Favorites));
  const isFavorite = Favorites?.some(
    (favorite: any) => favorite.id === game.id
  );

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavorite(game.id));
      CustomToast(`${game.title} removed from favorites`, "success");
    } else {
      dispatch(addFavorite(game));
      CustomToast(`${game.title} added to favorites`, "success");
    }
  };

  return { isFavorite, handleToggle };
};

export default useFavorites;
