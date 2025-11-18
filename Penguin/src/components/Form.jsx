import { Box, Button, TextField } from "@mui/material";
import { useRef } from "react";

function Form({ add }) {
  const contentRef = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const inputValue = contentRef.current.value;
    add(inputValue, "Alice");
    contentRef.current.value = "";
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          my: 2,
        }}
      >
        <form onSubmit={onSubmitHandler} style={{ width: "600px" }}>
          <TextField inputRef={contentRef} fullWidth placeholder="Content" />
          <br />
          <Button type="submit" sx={{ mt: 2 }} variant="contained">
            Click
          </Button>
        </form>
      </Box>
    </>
  );
}

export default Form;
