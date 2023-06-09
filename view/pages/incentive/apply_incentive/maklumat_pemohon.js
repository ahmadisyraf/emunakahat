import * as React from 'react';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, Select, Grid, MenuItem, useTheme, Typography, TextField, Button, Box } from "@mui/material";
import Item from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';
import DatePicker from '@mui/lab/DatePicker';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../api/user';
import { setUser } from '../../../state/action';
import { insertIncentiveApplication } from '../../api/incentive_application';

const MaklumatPemohon = () => {
    const IC = useSelector((state) => state.user.ic);
    const email = useSelector((state) => state.user.email);
    const gender = useSelector((state) => state.user.gender);
    const name = useSelector((state) => state.user.name);
    const address = useSelector((state) => state.user.address);
    const phone = useSelector((state) => state.user.phone);
    const educational_status = useSelector((state) => state.user.educational_status);
    const salary = useSelector((state) => state.user.salary);
    const race = useSelector((state) => state.user.race);
    const birth_date = useSelector((state) => state.user.birth_date);


    const [userIC, setUserIC] = useState(IC);
    const [userName, setUserName] = useState(name);
    const [userGender, setUserGender] = useState(gender);
    const [userEmail, setUserEmail] = useState(email);
    const [userAddress, setUserAddress] = useState(address);
    const [userPhoneNo, setUserPhoneNo] = useState(phone);
    const [userEducationalStatus, setUserEduationalStatus] = useState(educational_status);
    const [userSalary, setUserSalary] = useState(salary);
    const [userNationality, setUserNationality] = useState();
    const [userRace, setUserRace] = useState(race);
    const [userBirthDate, setUserBirthDate] = useState(birth_date);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const theme = useTheme();

    const handleChange = (event) => {
        setUserNationality(event.target.value);
    };


    return (

        <Box sx={{ px: 7, py: 5, backgroundColor: theme.palette.primary }}>
            <Typography variant={"h4"}>Maklumat Permohonan</Typography>
            <Grid sx={{ py: 2 }} container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
        </Box>
    );
}

export default MaklumatPemohon;