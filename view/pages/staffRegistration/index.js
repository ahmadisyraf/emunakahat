import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, MenuItem, FormControl, InputLabel, Select, Box, useTheme, Typography, TextField, Button, useMediaQuery } from "@mui/material";
import { MuiTelInput } from 'mui-tel-input'
import { useState } from 'react';
import { useRouter } from 'next/router';
//import { auth } from "../../../components/firebase/firebase";

const staffRegistration = ({ setShowRegister, info, setInfo, error, setError}) => {
    const [staffProfile, setstaffProfile] = useState();
    const [id, setIc] = useState();
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
        STAFF_ID: id,
        STAFF_NAME: name,
        STAFF_GENDER: gender,
        STAFF_PHONE_NO: phoneNo,
        STAFF_EMAIL: email,
    }


    const handleStaffRegister = () => {
        const defaultPassword = "defaultPassword123";

        if (password !== repassword) {
            setError('Password not the same');
            setShowRegister(false);
        } else {
            createUserWithEmailAndPassword(auth, email, defaultPassword)
                .then(() => {
                    
                    sendEmailVerification(user)
                        .then(() => {
                            setInfo("Verification link already sent to your email");
                        });
                        async function insertData() {
                            if (user) {
                                const result = await registerStaff({data}); 
                                console.log(result);
                                console.log("Success to db");
                                setShowRegister(false);
                            } else {
                                console.log("Error to db");
                            }
                        }
        
                        insertData();
                    })
                    .catch((err) => {
                        const errorCode = err.code.replace(/[-/]/g, " ");
                        setError("Error: " + errorCode.substr(errorCode.indexOf(" ") + 1));
                        setShowRegister(false);
                    });
            }
        };
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
                    onClick={handleStaffRegister}
                    sx={{ mt: 3, mb: 1 }}>
                    Daftar Pengguna
                </Button>
        </Paper>
    );

export default staffRegistration;