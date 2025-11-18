import { useMemo, useState } from "react";
import { AppContext } from "./AppContext";
import App from "./App";
import { green, grey, purple } from "@mui/material/colors";
import {
  createTheme,
  CssBaseline,
  Snackbar,
  ThemeProvider,
} from "@mui/material";
import AppDrawer from "./AppDrawer";

function ThemedApp() {
  const [mode, setMode] = useState("dark");
  const [showForm, setShowForm] = useState(false);
  const [globalMsg, setGlobalMsg] = useState("");
  const [auth, setAuth] = useState(null);
  const [showDrawer, setShowDrawer] = useState(true);
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: {
          main: purple[500],
        },
        secondary: {
          main: green[500],
        },
        banner: mode === "dark" ? grey[800] : grey[200],
      },
    });
  }, [mode]);
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          mode,
          setMode,
          showForm,
          setShowForm,
          globalMsg,
          setGlobalMsg,
          auth,
          setAuth,
          showDrawer,
          setShowDrawer,
        }}
      >
        <App />
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={Boolean(globalMsg)}
          autoHideDuration={6000}
          onClose={() => setGlobalMsg(null)}
          message={globalMsg}
        />
        <AppDrawer />
      </AppContext.Provider>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default ThemedApp;
