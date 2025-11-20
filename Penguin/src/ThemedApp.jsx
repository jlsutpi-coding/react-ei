import { useMemo, useState } from "react";
import { AppContext } from "./AppContext";
import { green, grey, purple } from "@mui/material/colors";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./Template";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Comments from "./pages/Comments";
import Likes from "./pages/Likes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/comments/:id",
        element: <Comments />,
      },
      {
        path: "/likes/:id",
        element: <Likes />,
      },
    ],
  },
]);

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
        <RouterProvider router={router} />
      </AppContext.Provider>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default ThemedApp;
