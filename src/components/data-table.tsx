import { AddIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { Movie } from "../types/movies";

export function DataTable(props: { movies: Movie[] }) {
  const { movies } = props;
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
        {movies?.map(
          ({ title, original_language, vote_average, poster_path, id }) => {
            const imageSource = poster_path
              ? "https://image.tmdb.org/t/p/original/" + poster_path
              : "img/no-image.png";
            return (
              <Tr key={id}>
                <Td>
                  <Image
                    alt={title}
                    src={imageSource}
                    boxSize="100px"
                    objectFit="fill"
                  />
                </Td>
                <Td>
                  <strong>{title}</strong>
                </Td>
                <Td>{original_language.toUpperCase()}</Td>
                <Td isNumeric>{vote_average.toFixed(1)}</Td>
                <Td>
                  <Tooltip label="Add to my List" aria-label="A tooltip">
                    <Button>
                      <AddIcon />
                    </Button>
                  </Tooltip>
                </Td>
              </Tr>
            );
          }
        )}
      </Tbody>
    </Table>
  );
}
