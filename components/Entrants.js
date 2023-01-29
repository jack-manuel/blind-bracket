import React from "react";
import { Group, Stack, Title } from "@mantine/core";
import EntrantsList from "./EntrantsList";
import EntrantForm from "./EntrantForm";

export default function Entrants(props) {
  const { entrants, setEntrants } = props;

  return (
    <Stack>
      <Title order={3}>Entrants</Title>
      <Group align='start'>
        <EntrantForm entrants={entrants} setEntrants={setEntrants} />
        <EntrantsList entrants={entrants} setEntrants={setEntrants} />
      </Group>
    </Stack>
  );
}
