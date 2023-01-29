import { Button, Group, Stack, TextInput } from "@mantine/core";
import React, { useState } from "react";

export default function EntrantForm(props) {
  const { entrants, setEntrants } = props;

  const [newEntrantName, setNewEntrantName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setEntrants([...entrants, newEntrantName]);
    setNewEntrantName("");
  }

  const buttonDisabled =
    entrants.includes(newEntrantName) ||
    newEntrantName === "" ||
    entrants.length >= 8;

  return (
    <Stack>
      <form onSubmit={handleSubmit}>
        <Group align='end'>
          <TextInput
            label='Entrant Name'
            value={newEntrantName}
            onChange={(e) => setNewEntrantName(e.currentTarget.value)}
            autoComplete='off'
          />
          <Button type='submit' disabled={buttonDisabled}>
            Add
          </Button>
        </Group>
      </form>
      <Button variant='subtle' onClick={() => setEntrants([])}>
        Clear List
      </Button>
    </Stack>
  );
}
