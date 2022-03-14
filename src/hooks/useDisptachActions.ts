import { useDispatch, useSelector } from "react-redux";
import {
  addToListActionCreator,
  RemoveFromListActionCreator,
} from "../store/actions";
import { AppState } from "../types/global";
import { Movie } from "../types/movies";

export function useDispatchActions() {
  const movies: Movie[] = useSelector((state: AppState) => state.movies);
  const dispatch = useDispatch();

  const dispatchAddToList = (movie: Movie) => {
    dispatch(addToListActionCreator(movie));
  };
  const dispatchRemoveFromList = (id: number) => {
    dispatch(RemoveFromListActionCreator(id));
  };

  return { movies, dispatchAddToList, dispatchRemoveFromList };
}
