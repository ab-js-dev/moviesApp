import { Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { DataTable } from "../components/data-table";
import { useDispatchActions } from "../hooks/useDisptachActions";
import { useGetMovies } from "../hooks/useGetMovies";
export function MoviesPage() {
  const { data, loading, fetchData } = useGetMovies();

  const { results } = data;

  useEffect(() => {
    fetchData(1);
  }, []);
  const {
    movies: myList,
    dispatchAddToList,
    dispatchRemoveFromList,
  } = useDispatchActions();
  return (
    <Stack p={40}>
      <DataTable
        movies={results}
        isMyList={false}
        myList={myList}
        onAddToList={dispatchAddToList}
        onRemoveFromList={dispatchRemoveFromList}
      />
    </Stack>
  );
}
