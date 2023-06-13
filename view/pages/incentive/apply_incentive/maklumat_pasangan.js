
import * as React from 'react';
import { FormControl, InputLabel, Select, Grid, MenuItem, useTheme, Typography, TextField, Button, Box } from "@mui/material";
import Item from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserByIC } from '../../api/user';

const MaklumatPasangan = () => {
    const IC = useSelector((state) => state.user.ic);
    const ic = useSelector((state) => state.user.partner_ic);


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
    const [partnerExist, setPartnerExist] = useState(false);
    const dispatch = useDispatch();

    const theme = useTheme();

    const handleChange = (event) => {
        setUserNationality(event.target.value);
    };

    //get partner data
    async function getPartner() {
        console.log("masuk");
        try {
            const partner = await getUserByIC({ ic });

            if (partner) {
                setUserIC(partner.USER_IC);
                setUserName(partner.USER_NAME);
                setUserGender(partner.USER_GENDER);
                setUserEmail(partner.USER_EMAIL);
                setUserAddress(partner.USER_ADDRESS);
                setUserPhoneNo(partner.USER_PHONE_NO);
                setUserEduationalStatus();
                setUserSalary(partner.USER_SALARY);
                setUserNationality(partner.USER_NATIONALITY);
                setUserRace(partner.USER_RACE);
                setUserBirthDate(partner.USER_BIRTH_DATE);
                setPartnerExist(true);

                console.log("success");
                console.log(partner);
            } else {
                console.log("error")
                setPartnerExist(false);
            }

        } catch (err) {
            console.log(err)
            setPartnerExist(false);
        }
    }

    useEffect(() => {
        console.log("masuk")
        getPartner();
    });



    return (

        <Box sx={{ px: 7, py: 5, backgroundColor: theme.palette.primary }}>
            {partnerExist ?
                <Box>
                    <Typography variant={"h4"}>Maklumat Pasangan Pemohon</Typography>
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
                :
                <Typography variant={"h4"}>Maaf, pasangan anda tidak dijumpai</Typography> //if pasangan data is not insert yet
            }
        </Box>
    );
}

export default MaklumatPasangan;