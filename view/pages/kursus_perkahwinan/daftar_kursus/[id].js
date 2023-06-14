import * as React from 'react';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, Select, Grid, MenuItem, useTheme, Typography, TextField, Button, Breadcrumbs, Link, Box, Snackbar, Alert, Zoom } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Item from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';
import DatePicker from '@mui/lab/DatePicker';
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { getCourseById, getCourse, insertBooking } from '../../api/course';

function Bread() {
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="inherit" href="/Kurus_Perkahwinan">
                Kursus Pra-Perkahwinan
            </Link>
            <Link
                underline="hover"
                color="inherit"
                href="/Kursus_Perkahwinan/Senarai_Kursus"
            >
                Daftar Kursus Pra-Perkahwinan
            </Link>
            <Link
                underline="hover"
                color="text.primary"
                href="/Kurusu_Perkahwinan/Daftar_Kursus"
            >
                Sahkan Maklumat Pendaftaran
            </Link>
        </Breadcrumbs>
    );
}

const DaftarKursus = () => {
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
    const [userReciept, setUserReciept] = useState();
    const [open, setOpen] = useState(false);

    const theme = useTheme();
    const router = useRouter();

    const [result, setResult] = useState();
    const id = router.query.id ? router.query.id : null;

    async function getData() {
        const res = await getCourseById({ id });
        console.log(res);
        setResult(res);
    }

    const course_id = result ? result._id : null;

    const data = {
        MCB_USER_IC: userIC,
        MCL_ID: course_id,
        MCB_PAYMENT_PROOF: userReciept,
        MCB_STATUS: "Dalam process",
        MCB_CERTIFICATE: "false",
    }

    const handleSubmit = async () => {
        const insert = await insertBooking({ data });

        if (insert) {
            console.log("Success");
            console.log(insert);
            setOpen(true);
        } else {
            console.log("None");
        }

        setTimeout(() => {
            router.push("/Kursus_Perkahwinan/Semak_Kursus");
        }, 2000);
    }



    useEffect(() => {
        getData();
    }, [id]);

    const handleChange = (event) => {
        setUserNationality(event.target.value);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Box sx={{}}>
            <Zoom in={true}>
                <Paper sx={{ mt: 10, px: 7, py: 5, backgroundColor: theme.palette.primary, mx: 5 }}>
                    <Bread />
                    <Typography variant='h4'>Sahkan Maklumat Pendaftaran</Typography>

                    <Paper variant='outlined' sx={{ py: 3, px: 2, mt: 2 }}>
                        <Typography fontWeight={800}>Maklumat Kursus</Typography>
                        <TableContainer sx={{ mt: 0 }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Anjuran</TableCell>
                                        <TableCell align="right">Tempat</TableCell>
                                        <TableCell align="right">Tarikh</TableCell>
                                        <TableCell align="right">Kapasiti</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow
                                        // key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {result?.MCL_ORGANIZER_NAME}
                                        </TableCell>
                                        <TableCell align="right">{result?.MCL_VENUE_NAME}</TableCell>
                                        <TableCell align="right">{result?.MCL_START_DATE} hingga {result?.MCL_END_DATE}</TableCell>
                                        <TableCell align="right">{result?.MCL_SLOT}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

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
                                InputProps={{
                                    readOnly: true,
                                }}
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
                                InputProps={{
                                    readOnly: true,
                                }}
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
                                InputProps={{
                                    readOnly: true,
                                }}
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
                                InputProps={{
                                    readOnly: true,
                                }}
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
                                InputProps={{
                                    readOnly: true,
                                }}
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
                                InputProps={{
                                    readOnly: true,
                                }}
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
                                InputProps={{
                                    readOnly: true,
                                }}
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
                                InputProps={{
                                    readOnly: true,
                                }}
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
                                InputProps={{
                                    readOnly: true,
                                }}
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
                                defaultValue={" "}
                                onChange={(e) => setSector(e.target.value)}
                                InputProps={{
                                    readOnly: true,
                                }}
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
                                InputProps={{
                                    readOnly: true,
                                }}
                            /></Item>
                        </Grid>
                        <Grid item xs={3.5}>
                            <Item> <TextField
                                fullWidth
                                id="Income"
                                label="NO. Resit"
                                name="resit"
                                autoComplete="Resit"
                                margin="normal"
                                defaultValue={" "}
                                value={userReciept}
                                onChange={(e) => setUserReciept(e.target.value)}

                            /></Item>
                        </Grid>

                    </Grid>

                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        variant="contained"
                        sx={{ mt: 1, mb: 1 }}>
                        Sahkan dan Bayar
                    </Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert severity="success" sx={{ width: '100%' }} onClose={handleClose} >
                            Daftar Perkahwinan Kursus Berjaya
                        </Alert>
                    </Snackbar>
                </Paper>
            </Zoom>
        </Box>
    );
}

export default DaftarKursus;
