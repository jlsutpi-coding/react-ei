import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useApp } from "../AppContext";
import {
  Menu as MenuIcon,
  Add as AddIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";

export default function Header() {
  const { showForm, setShowForm, mode, setMode } = useApp();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" edge="start">
          <MenuIcon />
        </IconButton>
        <Typography sx={{ flexGrow: 1, ml: 2 }}>Yaycha</Typography>
        <Box>
          <IconButton color="inherit" onClick={() => setShowForm(!showForm)}>
            <AddIcon />
          </IconButton>
          {mode === "dark" ? (
            <IconButton>
              <LightModeIcon
                color="inherit"
                edge="end"
                onClick={() => setMode("light")}
              />
            </IconButton>
          ) : (
            <IconButton>
              <DarkModeIcon
                color="inherit"
                edge="end"
                onClick={() => setMode("dark")}
              />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
