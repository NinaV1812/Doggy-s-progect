import { combineReducers, createStore } from "redux";
import breedReducer from "./breed/reducer"

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const store = createStore(
    combineReducers({
        breed: breedReducer,
      }),
      enhancer
);

export default store;
