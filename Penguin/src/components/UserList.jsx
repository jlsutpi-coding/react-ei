import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import List from "./List";

function UserList({ title }) {
  return (
    <Box sx={{}}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {title}
      </Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            primary="Alice @alice"
            secondary="Alice's profile bio"
          ></ListItemText>
        </ListItem>
      </List>
    </Box>
  );
}

export default UserList;
