import { Alert, Box, Button, TextField, Typography } from "@mui/material";

function Register() {
  return (
    <Box>
      <Typography variant="h4">Register</Typography>
      <Alert severity="warning" sx={{ mt: 2 }}>
        All Fields are required.
      </Alert>
      <form onSubmit={() => {}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 2,
          }}
        >
          <TextField fullWidth placeholder="Name" />
          <TextField fullWidth placeholder="UserName" />
          <TextField fullWidth placeholder="Bio" />
          <TextField fullWidth placeholder="Password" type="password" />
          <Button fullWidth variant="contained" type="submit">
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Register;
