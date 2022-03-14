import { AppAction } from "../types/global";
import { Movie } from "../types/movies";

export enum AppActionsEnum {
  ADD_TO_LIST = "ADD_TO_LIST",
  REMOVE_FROM_LIST = "REMOVE_FROM_LIST",
}

export function addToListActionCreator(movie: Movie): AppAction<Movie> {
  return {
    type: AppActionsEnum.ADD_TO_LIST,
    payload: movie,
  };
}
export function RemoveFromListActionCreator(
  movieId: number
): AppAction<number> {
  return {
    type: AppActionsEnum.REMOVE_FROM_LIST,
    payload: movieId,
  };
}
