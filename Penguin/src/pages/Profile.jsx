import { Avatar, Box, Container, Typography } from "@mui/material";
import Item from "../components/Item";
import { pink } from "@mui/material/colors";

function Profile() {
  return (
    <Box>
      <Box
        sx={{
          height: 150,
          bgcolor: "banner",
          borderRadius: 4,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          marginTop: "-60px",
          mb: 4,
        }}
      >
        <Avatar sx={{ width: 100, height: 100, mb: 1, bgcolor: pink[500] }} />
        <Box sx={{ textAlign: "center" }}>
          <Typography>Alice</Typography>
          <Typography sx={{ fontSize: "0.8em", color: "text.fade" }}>
            Alice's profile bio content here
          </Typography>
        </Box>
      </Box>
      <Item
        key={1}
        item={{ id: 1, name: "Alice", content: "Hello world" }}
        remove={() => {}}
        primary
      />
    </Box>
  );
}

export default Profile;
