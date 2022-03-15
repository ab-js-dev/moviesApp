import { Movie } from "../types/movies";

export function movieExistOnState(movieId: number, movies: Movie[]): boolean {
  if (!Array.isArray(movies)) return false;
  return !!movies?.find((movie) => movie.id === movieId);
}

export function getImageRealPath(suffix: string): string {
  return "https://image.tmdb.org/t/p/original/" + suffix;
}

export function extractYearFromDate(date: string) {
  return new Date(date).getFullYear();
}
