import React, { useState } from "react";
import { Button, Stack, Text, Title } from "@mantine/core";
import ActiveBracket from "./ActiveBracket";

export default function Bracket(props) {
  const { entrants } = props;

  const [bracketActive, setBracketActive] = useState(false);

  return (
    <Stack>
      <Title order={3}>Bracket</Title>
      {bracketActive ? (
        <ActiveBracket entrants={entrants} />
      ) : entrants.length < 8 ? (
        <Text>Need 8 entrants to start</Text>
      ) : (
        <Button onClick={() => setBracketActive(!bracketActive)}>
          Generate Bracket
        </Button>
      )}
    </Stack>
  );
}
