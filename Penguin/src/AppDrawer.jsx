import {
  Avatar,
  Box,
  Card,
  Divider,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import List from "./components/List";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import { useApp } from "./AppContext";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import { deepPurple } from "@mui/material/colors";

function AppDrawer() {
  const { auth, setAuth, showDrawer, setShowDrawer } = useApp();
  return (
    <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
      <Box sx={{ width: 300 }}>
        <Box
          sx={{
            height: 140,
            bgcolor: "banner",
            position: "relative",
            overflow: "visible",
            mb: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              left: 20,
              gap: 2,
              position: "absolute",
              bottom: -30,
            }}
          >
            <Avatar
              sx={{
                width: 94,
                height: 94,
                color: "white",
                background: deepPurple[500],
              }}
            />
            <Typography sx={{ fontWeight: 600 }}>Alice</Typography>
          </Box>
        </Box>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          {!auth && (
            <>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <PersonAddIcon />
                  </ListItemIcon>
                  <ListItemText>Register</ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton onClick={() => setAuth(!auth)}>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText>Login</ListItemText>
                </ListItemButton>
              </ListItem>
            </>
          )}
          {auth && (
            <>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton onClick={() => setAuth(!auth)}>
                  <ListItemIcon>
                    <LogoutIcon style={{ color: "red" }} />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );
}

export default AppDrawer;
