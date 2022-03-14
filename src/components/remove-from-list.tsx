import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Tooltip } from "@chakra-ui/react";

export function RemoveFromList(props: {
  movieId: number;
  onRemoveFromList: (id: number) => void;
}) {
  const { movieId, onRemoveFromList } = props;
  const removeFromList = () => {
    onRemoveFromList(movieId);
  };
  return (
    <Tooltip label="Remove from my List" aria-label="A tooltip">
      <Button colorScheme={"red"} onClick={removeFromList}>
        <DeleteIcon />
      </Button>
    </Tooltip>
  );
}
