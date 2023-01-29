import { ActionIcon, Group, Text } from "@mantine/core";
import React from "react";

export default function Entrant(props) {
  const { entrant, entrants, setEntrants } = props;

  return (
    <Group position='apart'>
      <Text>{entrant}</Text>
      <ActionIcon
        color='red'
        onClick={() => setEntrants(entrants.filter((item) => item !== entrant))}
      >
        X
      </ActionIcon>
    </Group>
  );
}
