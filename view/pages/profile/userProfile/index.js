import * as React from 'react';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, Select, Grid, MenuItem, useTheme, Typography, TextField, Button, Zoom } from "@mui/material";
import Item from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';
import DatePicker from '@mui/lab/DatePicker';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, getUserByIC } from '../../api/user';
import { setUser } from '../../../state/action';

const UserProfile = () => {
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
    const partner_ic = useSelector((state) => state.user.partner_ic)


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
    const [userPartnerIC, setUserPartnerIC] = useState(partner_ic);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const theme = useTheme();

    const handleChange = (event) => {
        setUserNationality(event.target.value);
    };

    const handleUpdateUser = async () => {
        try {
            const updatedData = {
                USER_IC: userIC,
                USER_NAME: userName,
                USER_GENDER: userGender,
                USER_PHONE_NO: userPhoneNo,
                USER_EMAIL: userEmail,
                USER_BIRTH_DATE: userBirthDate,
                USER_RACE: userRace,
                USER_NATIONALITY: userNationality,
                USER_ADDRESS: userAddress,
                USER_EDUCATIONAL_STATUS: userEducationalStatus,
                USER_SALARY: userSalary,
                USER_PARTNER_IC: userPartnerIC,
            };

            const updateData = await updateUser({ email, updatedData });

            if (updateData) {
                console.log('Success');
                console.log(updateData);

                const user_data = {
                    ic: IC,
                    name: updatedData.USER_NAME,
                    gender: updatedData.USER_GENDER,
                    phone: updatedData.USER_PHONE_NO,
                    email: updatedData.USER_EMAIL,
                    birth_date: updatedData.USER_BIRTH_DATE ? updatedData.USER_BIRTH_DATE : null,
                    race: updatedData.USER_RACE ? updatedData.USER_RACE : null,
                    address: updatedData.USER_ADDRESS ? updatedData.USER_ADDRESS : null,
                    educational_status: updatedData.USER_EDUCATIONAL_STATUS ? updatedData.USER_EDUCATIONAL_STATUS : null,
                    employment_position: updatedData.USER_EMPLOYMENT_POSITION ? updatedData.USER_EMPLOYMENT_POSITION : null,
                    salary: updatedData.USER_SALARY ? updatedData.USER_SALARY : null,
                    marriage_status: updatedData.USER_MARRIAGE_STATUS ? updatedData.USER_MARRIAGE_STATUS : null,
                    partner_ic: updatedData.USER_PARTNER_IC ? updatedData.USER_PARTNER_IC : null,
                    nationality: updatedData.USER_NATIONALITY ? updatedData.USER_NATIONALITY : null,
                    login: true,
                };

                dispatch(setUser(user_data));
            } else {
                console.log('Error');
            }
        }
     catch (error) {
            console.log('Error:', error);
        }
    };




    return (

        <Zoom in={true}>
            <Paper sx={{ mt: 10, px: 7, py: 5, backgroundColor: theme.palette.primary }}>
                <Typography variant='h4'>Profil</Typography>

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
                    <Grid item xs={3.5}>
                        <Item> <TextField
                            fullWidth
                            id="Income"
                            label="No. Kad Pengenalan Pasangan"
                            name="Income"
                            autoComplete="Income"
                            margin="normal"
                            defaultValue={" "}
                            value={userPartnerIC}
                            onChange={(e) => setUserPartnerIC(e.target.value)}
                        /></Item>
                    </Grid>

                </Grid>

                <Button style={{ width: "300px", height: "40px", }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={handleUpdateUser}
                    sx={{ mt: 1, mb: 1 }}>
                    Simpan
                </Button>
            </Paper>
        </Zoom>
    );

}

export default UserProfile;