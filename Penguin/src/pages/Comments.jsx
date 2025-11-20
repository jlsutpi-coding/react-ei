import { Box, Button, TextField } from "@mui/material";
import Item from "../components/Item";

function Comments() {
  return (
    <Box>
      <Item
        primary
        item={{
          id: 1,
          name: "Alice",
          content: "Initial Post comments from Alice",
        }}
        key={1}
        remove={() => {}}
        name
      />
      <Item
        item={{
          id: 2,
          name: "Bob",
          content: "Reply from Bob",
        }}
        key={2}
        remove={() => {}}
      />
      <Item
        item={{
          id: 3,
          name: "Alice",
          content: "Reply from Alice",
        }}
        key={3}
        remove={() => {}}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 3 }}>
          <TextField placeholder="Your comment" fullWidth />
          <Button type="submit" fullWidth variant="contained">
            Reply
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Comments;
