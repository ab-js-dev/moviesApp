import { Box, Link, Stack } from "@chakra-ui/react";
import { DataTable } from "../components/data-table";
import { useDispatchActions } from "../hooks/useDisptachActions";
import { Link as RouterLink } from "react-router-dom";
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
              Your list of movie is empty, <Link
              color='#0a66c2'
    as={RouterLink}
    to={'/movies'}
  >
    please visit
  </Link>  the list of movies and start adding
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
