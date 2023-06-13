import * as React from 'react';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, Select, Grid, MenuItem, useTheme, Typography, TextField, Button, Box, Alert, Snackbar } from "@mui/material";
import Item from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';
import DatePicker from '@mui/lab/DatePicker';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../api/user';
import { useRouter } from 'next/router';
import { setUser } from '../../../state/action';
import { insertIncentiveApplication } from '../../api/incentive_application';
import { insertRelative } from '../../api/relative';

const MaklumatPekerjaan = () => {
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


    const [relativeName, setRelativeName] = useState();
    const [relativeRelationship, setRelativeRelationship] = useState();
    const [relativeOccupation, setRelativeOccupation] = useState();
    const [relativeSalary, setRelativeSalary] = useState();
    const [relativePhone, setRelativePhone] = useState();
    const [relativeEmployer, setRelativeEmployer] = useState();
    const [relativeEmployerAdd, setRelativeEmployerAdd] = useState();
    const [jobtype, setJobtype] = useState();
    const [bankNumber, setBankNumber] = useState();
    const [bankAccount, setBankAccount] = useState();

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState();

    const router = useRouter();
    const theme = useTheme();

    const handleChange = (event) => {
        setUserNationality(event.target.value);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const handleJobChange = (event) => {
        setJobtype(event.target.value);
    };

    const handleInsert = async () => {
        const data = {
            "SIA_ACCOUNT_BANK_NO": bankNumber,
            "SIA_BANK_NAME": bankAccount,
            "USER_IC": IC,
        }

        try {
            const result = await insertIncentiveApplication({ data });
            const relative = await insertRelative({ data });

            if (result && relative) {
                console.log(result);
                setOpen(true);
                setMessage("Permohonan anda berjaya disimpan");

                setTimeout(() => {
                    router.push("/profile");
                }, 2000)
            }
        } catch (err) {
            console.log(err);
        }
    }




    return (

        <Box sx={{ px: 7, py: 5, backgroundColor: theme.palette.primary }}>
            <Typography variant={"h4"}>Maklumat Permohonan</Typography>
            <Grid sx={{ py: 2 }} container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={1}>
                {/* <Grid container spacing={2}> */}
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin='normal'
                        id="relativename"
                        label="Nama Waris"
                        name="relativename"
                        autoComplete="relativename"
                        value={relativeName}
                        defaultValue={" "}
                        onChange={(e) => setRelativeName(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin='normal'
                        id="relationship"
                        label="Hubungan"
                        name="relationship"
                        autoComplete="relationship"
                        value={relativeRelationship}
                        defaultValue={" "}
                        onChange={(e) => setRelativeRelationship(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin='normal'
                        id="occupation"
                        label="Pekerjaan"
                        name="occupation"
                        autoComplete="occupation"
                        value={relativeOccupation}
                        defaultValue={" "}
                        onChange={(e) => setRelativeOccupation(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputLabel id="demo-simple-select-label">Jenis Pekerjaan</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={jobtype}
                        label="Jenis Pekerjaan"
                        onChange={handleJobChange}
                        fullWidth
                    >
                        <MenuItem value="government">Kerajaan</MenuItem>
                        <MenuItem value="private">Swasta</MenuItem>
                    </Select>
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin='normal'
                        id="salary"
                        label="Pendapatan"
                        name="salary"
                        autoComplete="salary"
                        value={relativeSalary}
                        defaultValue={" "}
                        onChange={(e) => setRelativeSalary(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin='normal'
                        id="telephone"
                        label="No. Telefon"
                        name="telephone"
                        autoComplete="telephone"
                        value={relativePhone}
                        defaultValue={" "}
                        onChange={(e) => setRelativePhone(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin='normal'
                        id="employerName"
                        label="Nama Majikan"
                        name="employerName"
                        autoComplete="employerName"
                        value={relativeEmployer}
                        defaultValue={" "}
                        onChange={(e) => setRelativeEmployer(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin='normal'
                        id="employerAddress"
                        label="Alamat Majikan"
                        name="employerAddress"
                        autoComplete="employerAddress"
                        value={relativeEmployerAdd}
                        defaultValue={" "}
                        onChange={(e) => setRelativeEmployerAdd(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin='normal'
                        id="employerAddress"
                        label="Nama Bank"
                        name="employerAddress"
                        autoComplete="employerAddress"
                        defaultValue={" "}
                        value={bankAccount}
                        onChange={(e) => setBankAccount(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        margin='normal'
                        id="employerAddress"
                        label="No Akaun Bank"
                        name="employerAddress"
                        autoComplete="employerAddress"
                        defaultValue={" "}
                        value={bankNumber}
                        onChange={(e) => setBankNumber(e.target.value)}
                    />
                </Grid>
                <Grid item={12}>
                    <Button variant='contained' onClick={handleInsert}>Mohon</Button>
                </Grid>
                {/* </Grid> */}
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            </Grid>
        </Box>
    );
}

export default MaklumatPekerjaan;