import * as React from 'react';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, Select, Grid, MenuItem, useTheme, Typography, TextField, Button } from "@mui/material";
import Item from '@mui/material/InputLabel';
import { useState } from 'react';
import DatePicker from '@mui/lab/DatePicker';
//import { auth } from "../../../components/firebase/firebase";

const UserProfile = () => {
    const [nationality, setNationality] = useState('');
    const [userProfile, setuserProfile] = useState();
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [education, setEducation] = useState('');
    const [area, setArea] = useState('');
    const [sector, setSector] = useState('');

    const theme = useTheme();


    const handleChange = (event) => {
        setNationality(event.target.value);
    };

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
            <Grid item xs={7}>
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

            <Grid item xs={7}>
            <TextField
            fullWidth
            id="Address"
            label="Alamat"
            name="Address"
            autoComplete="Address"
            margin="normal"
            onChange={(e) => setAddress(e.target.value)}
            />
            </Grid>
            <Grid item xs={4}>
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

            <Grid item xs={3.5}>
            <Item> <TextField
                fullWidth
                id="BirthDate"
                label="Tarikh Lahir"
                name="BirthDate"
                autoComplete="BirthDate"
                margin="normal"
                onChange={(e) => setArea(e.target.value)}
                /></Item>
            </Grid>

            <Grid item xs={3.5}>
                <FormControl fullWidth margin='normal'>
                    <InputLabel id="demo-simple-select-label">Kewarganegaraan</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={nationality}
                        label="nationality"
                        onChange={handleChange}
                    >
                        <MenuItem value={""}>Select</MenuItem>
                        <MenuItem value={"Warganegara"}>Warganegara</MenuItem>
                        <MenuItem value={"Bukan Warganegara"}>Bukan Warganegara</MenuItem>
                    </Select>
                </FormControl>
                </Grid>

            <Grid item xs={4}>
            <Item> <TextField
                fullWidth
                id="Race"
                label="Bangsa"
                name="Race"
                autoComplete="Race"
                margin="normal"
                onChange={(e) => setState(e.target.value)}
                /></Item>
            </Grid>
            <Grid item xs={3.5}>
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

            <Grid item xs={3.5}>
            <Item> <TextField
                fullWidth
                id="Education"
                label="Tahap Pendidikan"
                name="Education"
                autoComplete="Education"
                margin="normal"
                onChange={(e) => setEducation(e.target.value)}
                /></Item>
            </Grid>
            
            <Grid item xs={4}>
            <Item> <TextField
                fullWidth
                id="Sector"
                label="Sektor Pekerjaan"
                name="Sector"
                autoComplete="Sector"
                margin="normal"
                onChange={(e) => setSector(e.target.value)}
                /></Item>
            </Grid>
            <Grid item xs={3.5}>
            <Item> <TextField
                fullWidth
                id="Income"
                label="Pendapatan (RM)"
                name="Income"
                autoComplete="Income"
                margin="normal"
                onChange={(e) => setSalary(e.target.value)}
                /></Item>
            </Grid>

            </Grid>
            
            <Button style={{width: "300px", height: "40px",}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 1, mb: 1 }}>
                    Simpan
                </Button>
        </Paper>
    );
}  

export default UserProfile;