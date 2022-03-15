import { Table, Thead, Tbody, Tr, Th, Td, Image } from "@chakra-ui/react";
import { ListingProps } from "../types/movies";
import { movieExistOnState } from "../utils/helper";
import { AddToList } from "./add-to-llst";
import { RemoveFromList } from "./remove-from-list";

export function DataTable(props: ListingProps) {
  const { movies, myList, isMyList, onAddToList, onRemoveFromList } = props;
  const listOfMovies = isMyList ? myList : movies;
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Title</Th>
          <Th>Language</Th>
          <Th isNumeric>Vote</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {listOfMovies?.map((movie) => {
          const { title, original_language, vote_average, poster_path, id } =
            movie;
          const imageSource = poster_path
            ? "https://image.tmdb.org/t/p/original/" + poster_path
            : "img/no-image.png";
          const movieOnList = movieExistOnState(id, myList) || isMyList;
          return (
            <Tr key={id}>
              <Td>
                <Image
                  alt={title}
                  src={imageSource}
                  boxSize="100px"
                  p={2}
                  objectFit="cover"
                />
              </Td>
              <Td>
                <strong>{title}</strong>
              </Td>
              <Td>{original_language.toUpperCase()}</Td>
              <Td isNumeric>{vote_average.toFixed(1)}</Td>
              <Td>
                {!movieOnList && (
                  <AddToList movie={movie} onAddToList={onAddToList} />
                )}
                {movieOnList && (
                  <RemoveFromList
                    movieId={id}
                    onRemoveFromList={onRemoveFromList}
                  />
                )}
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
