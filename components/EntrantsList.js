import { SimpleGrid } from "@mantine/core";
import React from "react";
import Entrant from "./Entrant";

export default function EntrantsList(props) {
  const { entrants, setEntrants } = props;

  return (
    <SimpleGrid
      breakpoints={[
        { minWidth: "sm", cols: 2 },
        { minWidth: "md", cols: 3 },
        { minWidth: "lg", cols: 4 },
      ]}
    >
      {entrants.map((entrant) => (
        <Entrant
          key={entrant}
          entrant={entrant}
          entrants={entrants}
          setEntrants={setEntrants}
        />
      ))}
    </SimpleGrid>
  );
}
