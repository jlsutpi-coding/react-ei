import App from "./App";
import { useMemo, useState } from "react";
import {
  CssBaseline,
  Snackbar,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { AppContent } from "./AppContext";
import { deepPurple, grey } from "@mui/material/colors";
import AppDrawer from "./components/AppDrawer";

export default function ThemedApp() {
  const [showDrawer, setShowDrawer] = useState(true);
  const [globalMsg, setGlobalMsg] = useState(null);
  const [auth, setAuth] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [mode, setMode] = useState("dark");

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: deepPurple,
        banner: mode === "dark" ? grey[800] : grey[200],
        text: {
          fade: grey[500],
        },
      },
    });
  }, [mode]);
  return (
    <ThemeProvider theme={theme}>
      <AppContent.Provider
        value={{
          showForm,
          setShowForm,
          mode,
          setMode,
          showDrawer,
          setShowDrawer,
          auth,
          setAuth,
          globalMsg,
          setGlobalMsg,
        }}
      >
        <App />
        <AppDrawer />
        <Snackbar
          anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
          open={Boolean(globalMsg)}
          autoHideDuration={6000}
          onClose={() => setGlobalMsg(null)}
          message={globalMsg}
        ></Snackbar>
        <CssBaseline />
      </AppContent.Provider>
    </ThemeProvider>
  );
}
