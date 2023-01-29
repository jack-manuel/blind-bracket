import { Button, Stack, Text } from "@mantine/core";
import React from "react";

export default function Match(props) {
  const { match } = props;

  return (
    <Stack align='center'>
      <Button color='red'>{match[0]}</Button>
      <Text>Vs.</Text>
      <Button color='blue'>{match[1]}</Button>
    </Stack>
  );
}
