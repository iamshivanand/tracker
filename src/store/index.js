import { createStore } from "redux";
import combineReducers from "../reducers";

let store;

export function configureStore() {
  store = createStore(combineReducers);

  return store;
}
