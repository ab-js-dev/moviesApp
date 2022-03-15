import {
  Heading,
  Box,
  Center,
  Image,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Movie, MovieButtonProps, MovieCardProps } from "../types/movies";
import { extractYearFromDate, getImageRealPath } from "../utils/helper";

export function MovieButton(props: MovieButtonProps) {
  const { color, label, clickHandler } = props;
  return (
    <Button
      w={"80%"}
      p={5}
      mt={8}
      colorScheme={color}
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "lg",
      }}
      onClick={clickHandler}
    >
      {label}
    </Button>
  );
}
export function MovieCard(props: MovieCardProps) {
  const { movie, isOnList, onAddToList, onRemoveFromList } = props;
  const { release_date, vote_count, vote_average, title, poster_path } = movie;
  const addToMyList = (movie: Movie) => {
    onAddToList(movie);
  };
  const deleteFromMyList = (movieId: number) => {
    onRemoveFromList(movieId);
  };
  return (
    <Center py={6}>
      <Box
        maxW={"300px"}
        w={"300px"}
        h={"600px"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        cursor={"pointer"}
        position="relative"
      >
        <Image
          boxSize={300}
          src={getImageRealPath(poster_path)}
          objectFit={"cover"}
        />

        <Box p={6} maxH={"200px"}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {title}
            </Heading>
            <Text color={"gray.500"}>{extractYearFromDate(release_date)}</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{vote_count}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Vote
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{vote_average.toFixed(1)}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                IMDB
              </Text>
            </Stack>
          </Stack>
        </Box>
        <Box pos={"absolute"} bottom={5} w={"100%"}>
          {!isOnList && (
            <MovieButton
              color="gray"
              label="Add to my list"
              clickHandler={() => {
                addToMyList(movie);
              }}
            />
          )}
          {isOnList && (
            <MovieButton
              color="red"
              label="Remove my list"
              clickHandler={() => {
                deleteFromMyList(movie.id);
              }}
            />
          )}
        </Box>
      </Box>
    </Center>
  );
}
