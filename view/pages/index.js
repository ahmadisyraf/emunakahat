import Login from "../screens/login";
import Register from "../screens/Register";
import {
  Paper,
  Box,
  Grid,
} from "@mui/material";
import { useState } from "react";

export default function Index() {

  const [showRegister, setShowRegister] = useState(false);

  return (
    <Box>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(/indek.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ display: "flex", flexDirection: "column", justifyContent: "center", overflow: "scroll" }}>
          {showRegister ? <Register setShowRegister={setShowRegister} /> : <Login setShowRegister={setShowRegister} />}
        </Grid>
      </Grid>
    </Box>
  );
}