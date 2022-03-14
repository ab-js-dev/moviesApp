import { Stack } from "@chakra-ui/react";
import { DataTable } from "../components/data-table";
import { useDispatchActions } from "../hooks/useDisptachActions";
export function MyListPage() {
  const {
    movies: myList,
    dispatchAddToList,
    dispatchRemoveFromList,
  } = useDispatchActions();

  return (
    <Stack p={40}>
      <DataTable
        movies={[]}
        isMyList={true}
        myList={myList}
        onAddToList={dispatchAddToList}
        onRemoveFromList={dispatchRemoveFromList}
      />
    </Stack>
  );
}
