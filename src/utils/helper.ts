import { Movie } from "../types/movies";
/**
 *
 * @param movieId id of a movie
 * @param movies my list of movie stored in the redux state
 * @returns a boolean, true if its exits , otherwise false
 */
export function movieExistOnState(movieId: number, movies: Movie[]): boolean {
  if (!Array.isArray(movies)) return false;
  return !!movies?.find((movie) => movie.id === movieId);
}

/**
 * Function that returns the real path for images, cause in api response it just give you the hash of the image file
 * @param suffix
 * @returns the string path of the image on the backend servers
 */
export function getImageRealPath(suffix: string): string {
  return "https://image.tmdb.org/t/p/original/" + suffix;
}

/**
 * function that takes a full date and returns the year only
 * @param date string date
 * @returns the full year of the input date
 */
export function extractYearFromDate(date: string) {
  return new Date(date).getFullYear();
}
