import { Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { DataTable } from "../components/data-table";
import { useGetMovies } from "../hooks/useGetMovies";
export function MoviesPage() {
  const { data, loading, fetchData } = useGetMovies();

  const { page, results, total_pages, total_results } = data;

  useEffect(() => {
    fetchData(1);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Stack p={40}>
      <DataTable movies={results} />
    </Stack>
  );
}
