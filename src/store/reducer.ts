import { AppAction, AppState, initState } from "../types/global";
import { AppActionsEnum } from "./actions";

export const appReducer = (
  state: AppState = initState,
  action: AppAction<any>
): AppState => {
  switch (action.type) {
    case AppActionsEnum.ADD_TO_LIST: {
      return { ...state, movies: [action.payload, ...state.movies] };
    }
    case AppActionsEnum.REMOVE_FROM_LIST: {
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
