import { Skeleton, Stack } from "@chakra-ui/react";

export function MoviesListSkelton() {
  return (
    <Stack m={40} p={20}>
      <Skeleton height="50px" width="20px" />
      <Skeleton height="100px" />
      <Skeleton height="100px" />
      <Skeleton height="100px" />
      <Skeleton height="100px" />
      <Skeleton height="100px" />
      <Skeleton height="100px" />
      <Skeleton height="100px" />
      <Skeleton height="100px" />
      <Skeleton height="100px" />
      <Skeleton height="100px" />
      <Skeleton height="100px" />
      <Skeleton height="100px" />
    </Stack>
  );
}
