import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AppAction, AppState } from "../types/global";
import { appReducer } from "./reducer";

export const store: Store<AppState, AppAction<any>> = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
