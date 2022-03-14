import { AddIcon } from "@chakra-ui/icons";
import { Button, Tooltip } from "@chakra-ui/react";
import { Movie } from "../types/movies";

export function AddToList(props: {
  movie: Movie;
  onAddToList: (movie: Movie) => void;
}) {
  const { movie, onAddToList } = props;
  const addToList = () => {
    onAddToList(movie);
  };
  return (
    <Tooltip label="Add to my List" aria-label="A tooltip">
      <Button onClick={addToList}>
        <AddIcon />
      </Button>
    </Tooltip>
  );
}
