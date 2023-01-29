import React, { useState } from "react";
import { SimpleGrid, Stack } from "@mantine/core";
import Match from "./Match";

export default function ActiveBracket(props) {
  const { entrants } = props;

  const [quarterFinal1Winner, setQuarterFinal1Winner] = useState(null);
  const [quarterFinal2Winner, setQuarterFinal2Winner] = useState(null);
  const [quarterFinal3Winner, setQuarterFinal3Winner] = useState(null);
  const [quarterFinal4Winner, setQuarterFinal4Winner] = useState(null);

  const shuffledEntrants = entrants
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  // THIS IS ALL BASED ON EXACTLY 8 ENTRANTS

  let quarterFinal1 = [shuffledEntrants[0], shuffledEntrants[1]];
  let quarterFinal2 = [shuffledEntrants[2], shuffledEntrants[3]];
  let quarterFinal3 = [shuffledEntrants[4], shuffledEntrants[5]];
  let quarterFinal4 = [shuffledEntrants[6], shuffledEntrants[7]];

  return (
    <SimpleGrid cols={2}>
      <Match match={quarterFinal1} />
      <Match match={quarterFinal2} />
      <Match match={quarterFinal3} />
      <Match match={quarterFinal4} />
    </SimpleGrid>
  );
}
