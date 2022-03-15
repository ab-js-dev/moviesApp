import { useDispatch, useSelector } from "react-redux";
import {
  addToListActionCreator,
  RemoveFromListActionCreator,
} from "../store/actions";
import { AppState } from "../types/global";
import { Movie } from "../types/movies";
/**
 * Custom hook to handle dispatching actions and retrieving redux state
 * @returns an object which has the dispatch actions and the redux state
 */
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
