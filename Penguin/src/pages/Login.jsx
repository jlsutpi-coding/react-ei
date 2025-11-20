import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useApp } from "../AppContext";

function Login() {
  const { setAuth } = useApp();
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h4">Login</Typography>
      <Alert severity="warning" sx={{ mt: 2 }}>
        All fields required.
      </Alert>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAuth(true);
          navigate("/");
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: "column",
            mt: 2,
          }}
        >
          <TextField fullWidth placeholder="Username" />
          <TextField fullWidth placeholder="Password" type="password" />
          <Button variant="contained" fullWidth type="sumbit">
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Login;
