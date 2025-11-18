import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import {
  Delete as DeleteIcon,
  AccountCircle as UserIcon,
  Alarm as TimeIcon,
} from "@mui/icons-material";
import { green } from "@mui/material/colors";

export default function Item({ item, remove }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <TimeIcon fontSize="small" color="success" />
            <Typography variant="caption" sx={{ color: green[500] }}>
              A few seconds ago
            </Typography>
          </Box>

          <IconButton onClick={() => remove(item.id)} size="small">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>

        <Typography sx={{ my: 3 }}>{item.content}</Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <UserIcon fontSize="small" color="info" />
          <Typography>{item.name}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
