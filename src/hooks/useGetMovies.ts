import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { ApiResponse } from "../types/movies";

export function getMovies(page: number): Promise<AxiosResponse<any, any>> {
  return axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=730ccf9420420809c3e9d1522e2a199a&language=en-US&page=" +
      page
  );
}

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
