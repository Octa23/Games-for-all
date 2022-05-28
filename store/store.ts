import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { favoritesReducer } from "./reducers/favoritesReducer";
const reducer = combineReducers({ favorites: favoritesReducer });
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
