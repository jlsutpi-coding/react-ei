import { Alert, Box, Button, TextField, Typography } from "@mui/material";

function Register() {
  return (
    <Box>
      <Typography variant="h3">Register</Typography>
      <Alert>All fields are required</Alert>
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 2,
          }}
        >
          <TextField placeholder="Name" fullWidth />
          <TextField placeholder="Username" fullWidth />
          <TextField placeholder="Bio" fullWidth />
          <TextField placeholder="Password" type="password" fullWidth />
          <Button type="submit" variant="contained" fullWidth>
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Register;
