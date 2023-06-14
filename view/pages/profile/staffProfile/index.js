import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Box, useTheme, Typography, TextField, Button, Zoom } from "@mui/material";
import Item from '@mui/material/InputLabel';
import { useState } from 'react';
//import { auth } from "../../../components/firebase/firebase";
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, getUserByIC } from '../../api/user';
import { setUser } from '../../../state/action';

const StaffProfile = () => {

    const staffID = useSelector((state) => state.user.id);
    const staffemail = useSelector((state) => state.user.email);
    const staffphone = useSelector((state) => state.user.phone);
    const staffgender = useSelector((state) => state.user.gender);
    const [staffProfile, setstaffProfile] = useState();
    const staffname = useSelector((state) => state.user.name);

    const [staffIC, setStaffIC] = useState(staffID);
    const [staffName, setStaffName] = useState(staffname);
    const [staffGender, setStaffGender] = useState(staffgender);
    const [staffEmail, setStaffEmail] = useState(staffemail);
    const [staffPhoneNo, setStaffPhoneNo] = useState(staffphone);
    const dispatch = useDispatch();

    const theme = useTheme();

    const handleUpdateStaff = async () => {
        try {
            const updatedData = {
                STAFF_ID: staffIC,
                STAFF_NAME: staffName,
                STAFF_GENDER: staffGender,
                STAFF_PHONE_NO: staffPhoneNo,
                STAFF_EMAIL: staffEmail,
        };

        const updateData = await updateUser({ email, updatedStaffData });

        if (updateData) {
            console.log('Success');
            console.log(updateData);

            const staff_data = {
                id: ID,
                name: updatedData.STAFF_NAME ? updatedData.STAFF_NAME : null,
                gender: updatedData.STAFF_GENDER ? updatedData.STAFF_GENDER : null,
                phone: updatedData.STAFF_PHONE_NO ? updatedData.STAFF_PHONE_NO : null,
                email: updatedData.STAFF_EMAIL ? updatedData.STAFF_EMAIL : null,
                login: true,
                role: 'admin'
            };

            dispatch(setUser(staff_data));
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
                            value={staffID}
                            onChange={(e) => setStaffIC(e.target.value)}
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
                            defaultValue={" "}
                            value={staffName}
                            onChange={(e) => setStaffName(e.target.value)}
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
                            value={staffGender}
                            onChange={(e) => setStaffGender(e.target.value)}
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
                            defaultValue={" "}
                            value={staffPhoneNo}
                            onChange={(e) => setStaffPhoneNo(e.target.value)}
                        /></Item>
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
                            value={staffEmail}
                            onChange={(e) => setStaffEmail(e.target.value)}
                        /></Item>
                    </Grid>

                </Grid>

                <Button style={{ width: "300px", height: "40px", }}
                    type="submit"
                    color="secondary"
                    fullWidth
                    variant="contained"
                    onClick={handleUpdateStaff}
                    sx={{ mt: 3, mb: 1 }}>
                    Kemaskini
                </Button>
            </Paper>
        </Zoom>
    );
}

export default StaffProfile;