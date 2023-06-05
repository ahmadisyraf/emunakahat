import * as React from 'react';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, Select, Grid, Box, useTheme, Typography, TextField, Button, useMediaQuery } from "@mui/material";
import Item from '@mui/material/InputLabel';
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
            
            <Grid  sx={{py:2}} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
                <Item><b>No. Kad Pengenalan :</b></Item>
            </Grid>
            <Grid item xs={7}>
                <Item><Box>
                <TextField style={{ width: '450px' }}
                disabled
                id="filled-hidden-label-small"
                defaultValue=""
                size="small"
                />
                </Box></Item>
            </Grid>
            <Grid item xs={3}>
                <Item><b>Nama* :</b></Item>
            </Grid>
            <Grid item xs={7}>
                <Item><Box>
                <TextField style={{ width: '450px' }}
                id="filled-hidden-label-small"
                defaultValue=""
                size="small"
                />
                </Box></Item>
            </Grid>
            <Grid item xs={3}>
                <Item><b>Jantina :</b></Item>
            </Grid>
            <Grid item xs={7}>
                <Item><FormControl fullWidth margin='normal'>
                    <InputLabel id="demo-simple-select-label">Gender*</InputLabel>
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
                </FormControl></Item>
            </Grid>
            <Grid item xs={3}>
                <Item><b>No Telefon* :</b></Item>
            </Grid>
            <Grid item xs={7}>
                <Item><Box>
                <TextField style={{ width: '450px' }}
                id="filled-hidden-label-small"
                defaultValue=""
                size="small"
                />
                </Box></Item>
            </Grid>
            <Grid item xs={3}>
                <Item><b>Email* :</b></Item>
            </Grid>
            <Grid item xs={7}>
                <Item><Box>
                <TextField style={{ width: '450px' }}
                id="filled-hidden-label-small"
                defaultValue=""
                size="small"
                />
                </Box></Item>
            </Grid>
            <Grid item xs={3}>
                <Item><b>Peranan* :</b></Item>
            </Grid>
            <Grid item xs={7}>
                <Item><Box>
                <TextField style={{ width: '450px' }}
                id="filled-hidden-label-small"
                defaultValue=""
                size="small"
                />
                </Box></Item>
            </Grid>
            <Grid item xs={3}>
                <Item><b>Password* (Default) :</b></Item>
            </Grid>
            <Grid item xs={7}>
                <Item><Box>
                <TextField style={{ width: '450px' }}
                id="filled-hidden-label-small"
                defaultValue=""
                size="small"
                />
                </Box></Item>
            </Grid>
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