import { Games } from "../../types";

const initialState = {
  Favorites: [] as Games[],
}

export const favoritesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "@favorites/init":
      return { ...state, Favorites: action.payload };
    case "@favorites/add":
      return { ...state, Favorites: [...state.Favorites, action.payload] };
    case "@favorites/remove":
      return {
        ...state,
        Favorites: [
          ...state.Favorites.filter(
            (game: Games) => game.id !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
};

//Actions creators
export const initFavorites = (favorites: any) => {
  return {
    type: "@favorites/init",
    payload: favorites,
  };
};

export const addFavorite = (game: any) => {
  return {
    type: "@favorites/add",
    payload: game,
  };
};

export const removeFavorite = (id: number) => {
  return {
    type: "@favorites/remove",
    payload: id,
  };
};
