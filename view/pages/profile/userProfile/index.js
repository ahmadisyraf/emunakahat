import * as React from 'react';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, Select, Grid, MenuItem, useTheme, Typography, TextField, Button } from "@mui/material";
import Item from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';
import DatePicker from '@mui/lab/DatePicker';
import Cookies from 'js-cookie';
//import { auth } from "../../../components/firebase/firebase";

const UserProfile = () => {

    const cookie = Cookies.get("user_data");
    let user_data = {};
    const [userIC, setUserIC] = useState();
    const [userName, setUserName] = useState();
    const [userGender, setUserGender] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userAddress, setUserAddress] = useState();
    const [userPhoneNo, setUserPhoneNo] = useState();
    const [userEducationalStatus, setUserEduationalStatus] = useState();
    const [userSalary, setUserSalary] = useState();
    const [userNationality, setUserNationality] = useState();
    const [userRace, setUserRace] = useState();
    const [userBirthDate, setUserBirthDate] = useState();

    useEffect(() => {
        user_data = JSON.parse(Cookies.get("user_data"))
        setUserIC(user_data.ic? user_data.ic : null);
        setUserName(user_data.name? user_data.name : null);
        setUserGender(user_data.gender? user_data.gender : null);
        setUserEmail(user_data.email? user_data.email : null);
        setUserAddress(user_data.address? user_data.address : null);
        setUserPhoneNo(user_data.phone? user_data.phone : null);
        setUserEduationalStatus(user_data.educational_status? user_data.educational_status : null);
        setUserSalary(user_data.salary? user_data.salary : null)
        setUserRace(user_data.race? user_data.race : null);
    }, [cookie])

    console.log(userIC)

    const theme = useTheme();


    const handleChange = (event) => {
        setUserNationality(event.target.value);
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
                    defaultValue={" "}
                    value={userIC}
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
                defaultValue={" "}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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
                defaultValue={" "}
                value={userGender}
                onChange={(e) => setUserGender(e.target.value)}
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
            defaultValue={" "}
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
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
                defaultValue={" "}
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
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
                defaultValue={" "}
                value={userBirthDate}
                onChange={(e) => setUserBirthDate(e.target.value)}
                /></Item>
            </Grid>

            <Grid item xs={3.5}>
                <FormControl fullWidth margin='normal'>
                    <InputLabel id="demo-simple-select-label">Kewarganegaraan</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={userNationality}
                        label="nationality"
                        onChange={handleChange}
                    >
                        <MenuItem value={null}>Select</MenuItem>
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
                defaultValue={" "}
                value={userRace}
                onChange={(e) => setUserRace(e.target.value)}
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
                defaultValue={" "}
                value={userPhoneNo}
                onChange={(e) => setUserPhoneNo(e.target.value)}
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
                defaultValue={" "}
                value={userEducationalStatus}
                onChange={(e) => setUserEduationalStatus(e.target.value)}
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
                defaultValue={" "}
                value={userSalary}
                onChange={(e) => setUserSalary(e.target.value)}
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