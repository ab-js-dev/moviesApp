import { Movie } from "./movies";

export interface AppState {
  movies: Movie[];
}

export interface AppAction<T> {
  type: string;
  payload: T;
}

export const initState = {
  movies: [],
};
