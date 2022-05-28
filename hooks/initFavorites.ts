import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initFavorites } from "../store/reducers/favoritesReducer";

export const SetFavorites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      dispatch(
        initFavorites(JSON.parse(localStorage.getItem("favorites") as string))
      );
    }
  }, [dispatch]);
};
