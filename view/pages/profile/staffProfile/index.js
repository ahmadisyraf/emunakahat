import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Box, useTheme, Typography, TextField, Button } from "@mui/material";
import Item from '@mui/material/InputLabel';
import { useState } from 'react';
//import { auth } from "../../../components/firebase/firebase";

const StaffProfile = () => {
    const [staffProfile, setstaffProfile] = useState();

    const theme = useTheme();

    return (

        <Paper sx={{ mt: 10, px: 7, py: 5, backgroundColor: theme.palette.primary }}>
            <Typography variant='h4'>Profil</Typography>
            
            <Grid  sx={{py:2}} container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4}>
            <TextField
                    fullWidth
                    margin='normal'
                    id="Identification"
                    label="No. Kad Pengenalan"
                    name="Identification"
                    autoComplete="Identification"
                    onChange={(e) => setIc(e.target.value)}
                />
            </Grid>
            <Grid item xs={4}>
                <Item> <TextField
                fullWidth
                id="Name"
                label="Nama Penuh"
                name="Name"
                autoComplete="Name"
                margin="normal"
                onChange={(e) => setName(e.target.value)}
                /></Item>
            </Grid>
            <Grid item xs={4}>
            <Item> <TextField
                fullWidth
                id="Gender"
                label="Jantina"
                name="Gender"
                autoComplete="Gender"
                margin="normal"
                onChange={(e) => setGender(e.target.value)}
                /></Item>
            </Grid>

            <Grid item xs={4}>
            <Item> <TextField
                fullWidth
                id="phoneNo"
                label="No. Telefon"
                name="phoneNo"
                autoComplete="phoneNo"
                margin="normal"
                onChange={(e) => setphoneNo(e.target.value)}
                /></Item>
            </Grid>
            <Grid item xs={3}>
            <Item> <TextField
                fullWidth
                id="email"
                label="Emel"
                name="email"
                autoComplete="email"
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
                /></Item>
            </Grid>
            
            </Grid>

            <Button style={{width: "300px", height: "40px",}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 1 }}>
                    Kemaskini
                </Button>
        </Paper>
    );
}  

export default StaffProfile;