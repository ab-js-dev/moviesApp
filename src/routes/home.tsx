import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Carousel from "../components/carousel";

export default function Home() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Welcome To the Movies App <br />
          <Text as={"span"} color={"orange.400"}>
            made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Never miss the FUN. Never be late for one too.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <NavLink key={"movies"} to={"/movies"}>
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              Popular Movies
            </Button>
          </NavLink>
          <NavLink key={"mylist"} to={"/my-list"}>
            <Button rounded={"full"} px={6}>
              My Favorites
            </Button>
          </NavLink>
        </Stack>
        <Flex w={"full"}>
          <Carousel />
        </Flex>
      </Stack>
    </Container>
  );
}
