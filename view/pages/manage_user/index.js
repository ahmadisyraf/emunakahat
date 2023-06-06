import {
    Paper,
    Box,
    Grid,
    Alert,
    Typography,
    useTheme,
    useMediaQuery
} from "@mui/material";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import KursusListing from "../kursus_perkahwinan/kursus_listing";

// This is manage user package view
export default function ManageUser() {
    const [showRegister, setShowRegister] = useState(false);
    const [error, setError] = useState();
    const [info, setInfo] = useState();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('md'));

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
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {setShowRegister ?
                            <Typography component="h1" variant="h5">
                                Sign in to E-Munakahat
                            </Typography>
                            :
                            null
                        }
                    </Box>
                    <Box sx={{ px: mobile ? 1 : 13, mt: 3 }}>
                        {info && <Alert severity="success">{info}</Alert>}
                        {error && <Alert severity="error">{error}</Alert>}
                    </Box>
                    {showRegister ?
                        <Register
                            setShowRegister={setShowRegister}
                            info={info}
                            setInfo={setInfo}
                            error={error}
                            setError={setError}
                        />
                        :
                        <Login
                            setShowRegister={setShowRegister}
                            info={info}
                            setInfo={setInfo}
                            error={error}
                            setError={setError}
                        />}
                </Grid>
            </Grid>
        </Box>
    );
}