export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface ApiError {
  status_message: string;
  status_code: number;
}

export interface ChildrenBehaviorProps {
  isMyList?: boolean;
  onAddToList: (movie: Movie) => void;
  onRemoveFromList: (id: number) => void;
}
export interface ListingProps extends ChildrenBehaviorProps {
  movies: Movie[];
  myList: Movie[];
}

export interface MovieCardProps extends ChildrenBehaviorProps {
  movie: Movie;
  isOnList: boolean;
}

export interface MovieButtonProps {
  color: string;
  label: string;
  clickHandler: () => void;
}
