import { Movie } from "../types/movies";

export function movieExistOnState(movieId: number, movies: Movie[]): boolean {
  if (!Array.isArray(movies)) return false;
  return !!movies?.find((movie) => movie.id === movieId);
}
