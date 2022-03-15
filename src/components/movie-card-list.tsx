import { ListingProps } from "../types/movies";
import { movieExistOnState } from "../utils/helper";
import { MovieCard } from "./movie-card";

export function MovieCardList(props: ListingProps) {
  const { movies, myList, isMyList, onRemoveFromList, onAddToList } = props;
  return (
    <>
      {movies.map((movie) => {
        const isOnList = movieExistOnState(movie.id, myList);
        return (
          <MovieCard
            movie={movie}
            onAddToList={onAddToList}
            onRemoveFromList={onRemoveFromList}
            isMyList={isMyList}
            isOnList={isOnList}
          />
        );
      })}
    </>
  );
}
