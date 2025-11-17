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
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <TimeIcon fontSize="10" color="success" />
            <Typography variant="caption" sx={{ color: green[500] }}>
              A few second ago
            </Typography>
          </Box>
          <IconButton onClick={() => remove(item.id)} size="small">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Typography sx={{ my: 3 }}>{item.content}</Typography>
        <Box>
          <UserIcon fontSize="12" color="info">
            <Typography>{item.name}</Typography>
          </UserIcon>
        </Box>
      </CardContent>
    </Card>
  );
}
