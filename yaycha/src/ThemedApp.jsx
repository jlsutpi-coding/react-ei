import { useMemo, useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { AppContent } from "./AppContext";
import { deepPurple, grey } from "@mui/material/colors";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./Template";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

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
        <RouterProvider router={router} />
        <CssBaseline />
      </AppContent.Provider>
    </ThemeProvider>
  );
}
