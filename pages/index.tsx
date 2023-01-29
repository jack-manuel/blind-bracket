import { useState } from "react";
import {
  AppShell,
  Center,
  Header,
  MantineProvider,
  Stack,
  Title,
} from "@mantine/core";
import Entrants from "../components/Entrants";
import Bracket from "../components/Bracket";

export default function IndexPage() {
  const [entrants, setEntrants] = useState([
    "Jack",
    "Teddy",
    "Josh",
    "Lizzie",
    "Demetri",
    "Martin",
    "Maria",
    "Bamford",
  ]);

  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <AppShell
        header={
          <Header height={70} p='sm'>
            <Title>Blind Brackets</Title>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Stack>
          <Entrants entrants={entrants} setEntrants={setEntrants} />
          <Bracket entrants={entrants} />
        </Stack>
      </AppShell>
    </MantineProvider>
  );
}
