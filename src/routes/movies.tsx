import {
  Flex,
  Icon,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { DataTable } from "../components/data-table";
import { MovieCardList } from "../components/movie-card-list";
import { useDispatchActions } from "../hooks/useDisptachActions";
import { useGetMovies } from "../hooks/useGetMovies";
import { BsListCheck, BsGrid3X3GapFill } from "react-icons/bs";
import { MoviesListSkelton } from "../components/movies-list-skelton";
export function MoviesPage() {
  const { data, loading, fetchData } = useGetMovies();

  const { results } = data;

  useEffect(() => {
    fetchData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {
    movies: myList,
    dispatchAddToList,
    dispatchRemoveFromList,
  } = useDispatchActions();

  if (loading) return <MoviesListSkelton />;
  return (
    <Tabs m={40}>
      <TabList borderBottom={0}>
        <Tab>
          <Icon as={BsListCheck} mr={4} />
          <strong>List View</strong>
        </Tab>
        <Tab>
          <Icon as={BsGrid3X3GapFill} mr={4} />
          <strong>Card View</strong>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Stack p={20}>
            <DataTable
              movies={results}
              isMyList={false}
              myList={myList}
              onAddToList={dispatchAddToList}
              onRemoveFromList={dispatchRemoveFromList}
            />
          </Stack>
        </TabPanel>
        <TabPanel>
          <Flex justifyContent={"space-between"} flexWrap={"wrap"} p={20}>
            <MovieCardList
              movies={results}
              isMyList={false}
              myList={myList}
              onAddToList={dispatchAddToList}
              onRemoveFromList={dispatchRemoveFromList}
            />
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
