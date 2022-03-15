import { Box, Stack } from "@chakra-ui/react";
import { DataTable } from "../components/data-table";
import { useDispatchActions } from "../hooks/useDisptachActions";
export function MyListPage() {
  const {
    movies: myList,
    dispatchAddToList,
    dispatchRemoveFromList,
  } = useDispatchActions();
  if (!myList?.length)
    return (
      <Box m={60}>
        <div className="no-data">
          <main>
            <h1>Sorry!</h1>
            <p>
              Either you aren't cool enough to see the data or it doesn't exist{" "}
              <em>. . . like your social life.</em>
            </p>
          </main>
        </div>
      </Box>
    );
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
