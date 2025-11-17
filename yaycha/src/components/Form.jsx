import { Box, Button, TextField } from "@mui/material";
import { useRef } from "react";

export default function Form({ add }) {
  const contentRef = useRef();
  function onSubmitHandler(e) {
    e.preventDefault();
    const content = contentRef.current.value;
    add(content, "Alice");
    e.currentTarget.reset();
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <Box>
        <TextField
          inputRef={contentRef}
          type="text"
          placeholder="Context"
          fullWidth
          multiline
          sx={{ mb: 1 }}
        />
        <Button sx={{ mb: 4 }} variant="contained" type="submit">
          Post
        </Button>
      </Box>
    </form>
  );
}
