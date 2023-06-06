import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, MenuItem, FormControl, InputLabel, Select, Box, useTheme, Typography, TextField, Button, useMediaQuery } from "@mui/material";
import { MuiTelInput } from 'mui-tel-input'
import { useState } from 'react';
//import { auth } from "../../../components/firebase/firebase";

const staffRegistration = ({ setShowRegister, info, setInfo, error, setError}) => {
    const [staffProfile, setstaffProfile] = useState();
    const [ic, setIc] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [gender, setGender] = useState('');
    const [phoneNo, setPhoneNo] = useState('')
    
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const handlePhoneChange = (newValue) => {
        setPhoneNo(newValue)
    }

    const handleShowLogin = () => {
        setShowRegister(false);
    }

    const data = {
        STAFF_IC: ic,
        STAFF_NAME: name,
        STAFF_GENDER: gender,
        STAFF_PHONE_NO: phoneNo,
        STAFF_EMAIL: email,
    }


    return (

        <Paper sx={{ mt: 10, px: 7, py: 5, backgroundColor: theme.palette.primary }}>
            <Typography variant='h4'>Tambah Pengguna</Typography>
            
            <Grid  sx={{py:2}} container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>     
            <Grid item sm={4}>
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

                <Grid item xs={6}>
                <TextField

                    fullWidth
                    id="Name"
                    label="Nama"
                    name="Name"
                    autoComplete="Name"
                    margin="normal"
                    onChange={(e) => setName(e.target.value)}
                />
                </Grid>

                <Grid item xs={4}>
                <FormControl fullWidth margin='normal'>
                    <InputLabel id="demo-simple-select-label">Jantina</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={""}>None</MenuItem>
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                    </Select>
                </FormControl>
                </Grid>

                <Grid item xs={6}>
                <MuiTelInput value={phoneNo} onChange={handlePhoneChange} margin="normal" fullWidth label="No. Telefon" defaultCountry="MY" sx={{ mt: 1 }}
                /></Grid>

                <Grid item xs={4}>
                <TextField

                    fullWidth
                    margin="normal"
                    id="email"
                    label="Emel"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                /></Grid>

                <Grid item xs={6}>
                <TextField

                    fullWidth
                    margin="normal"
                    name="role"
                    label="Peranan"
                    type="role"
                    id="role"
                    autoComplete="role"
                    onChange={(e) => setRole(e.target.value)}
                /></Grid>

                <Grid item xs={4}>
                <TextField

                    fullWidth
                    margin="normal"
                    name="password"
                    label="Kata Laluan"
                    type="password"
                    id="password"
                    autoComplete="password"
                    onChange={(e) => setPassword(e.target.value)}

                /></Grid>
            </Grid>

            <Button style={{width: "300px", height: "40px",}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 1 }}>
                    Daftar Pengguna
                </Button>
        </Paper>
    );
}  

export default staffRegistration;