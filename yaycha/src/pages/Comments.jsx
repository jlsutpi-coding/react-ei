import { Box, Button, TextField } from "@mui/material";
import Item from "../components/Item";

function Comments() {
  return (
    <Box>
      <Item
        primary
        key={1}
        remove={() => {}}
        item={{
          id: 1,
          content: "Initial post content from Alice",
          name: "Alice",
        }}
      />
      <Item
        key={2}
        remove={() => {}}
        item={{
          id: 2,
          content: "A comment from Bob",
          name: "Bob",
        }}
      />
      <Item
        key={3}
        remove={() => {}}
        item={{
          id: 3,
          content: "A comment reply from Alice",
          name: "Alice",
        }}
      />
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            my: 3,
          }}
        >
          <TextField multiline placeholder="Your comment" />
          <Button type="submit" variant="contained">
            Reply
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Comments;
