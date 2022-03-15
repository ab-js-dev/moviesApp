import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { ApiResponse } from "../types/movies";

/**
 * Function to fetch list of popular movies from API.
 * @param page
 * @returns a promise of type AxiosResponse
 */
export function getMovies(page: number): Promise<AxiosResponse<any, any>> {
  return axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=730ccf9420420809c3e9d1522e2a199a&language=en-US&page=" +
      page
  );
}

/**
 * Custom hook to handle fetching the data and the loading state for fetching data
 * @returns loading state, the fetched data, and a function that can be used for calling data.
 * Example: if we need pagination
 */
export function useGetMovies() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ApiResponse>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const fetchData = async (page: number) => {
    setLoading(true);
    const response = await getMovies(page);
    setData(response?.data);
    setLoading(false);
  };

  return { loading, data, fetchData };
}
