import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, useTheme, Typography, Stack, Button, IconButton, Breadcrumbs, Link, Zoom, Alert, Snackbar } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useSelector } from 'react-redux';
import { getBookingById, getBooking, deleteBooking, updateBooking } from '../../api/course';
import { getUserByIC } from '../../api/user';
import { useRouter } from 'next/router';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import DeleteIcon from '@mui/icons-material/Delete';

function Bread() {
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="inherit" href="/kursus_perkahwinan">
                Kursus Pra-Perkahwinan
            </Link>
            <Link
                underline="hover"
                color="text.primary"
                href="/kursus_perkahwinan/kursus_check"
            >
                Senarai Peserta Kursus Pra-Perkahwinan
            </Link>
        </Breadcrumbs>
    );
}

const SenaraiPeserta = () => {
    const [anjuran, setAnjuran] = useState({});
    const IC = useSelector((state) => state.user.ic);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState();
    const [result, setResult] = useState();
    const router = useRouter();

    const handleChange = (event) => {
        setAnjuran(event.target.value);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    async function getData() {
        try {
            const data = await getBooking();

            if (data) {
                setResult(data);

                const combinedData = [];

                // Use Promise.all to wait for all async operations to complete
                await Promise.all(
                    data.map(async (d) => {
                        const ic = d.MCB_USER_IC;

                        // Await the result of getUserByIC
                        const user = await getUserByIC({ ic });

                        // Create the combined data object
                        const combinedItem = {
                            USER_IC: d.MCB_USER_IC,
                            USER_NAME: user.USER_NAME,
                            MCB_ID: d._id,
                            MCB_STATUS: d.MCB_STATUS,
                        };

                        // Add the combined item to the array
                        combinedData.push(combinedItem);
                    })
                );

                // Set the combined data as the result
                setResult(combinedData);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    console.log(result);

    const theme = useTheme();
    return (
        <Box sx={{ px: 5 }}>
            <Zoom in={true}>
                <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary }}>
                    <Bread />
                    <Typography variant='h4'>Senarai Peserta Kursus Pra-Perkahwinan</Typography>
                    <TableContainer sx={{ mt: 5 }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nama</TableCell>
                                    <TableCell>No. Kad Pengenalan</TableCell>
                                    {/* <TableCell align="right">Nama</TableCell> */}
                                    <TableCell align="right">No. Siri Taklimat</TableCell>
                                    {/* <TableCell align="right">Tarikh Mohon</TableCell> */}
                                    <TableCell align="right">Status</TableCell>
                                    <TableCell>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {result?.map((d, i) => (
                                    <TableRow
                                        key={i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>
                                            {d.USER_NAME}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {d.USER_IC}
                                        </TableCell>
                                        <TableCell align="right">{d.MCB_ID}</TableCell>
                                        <TableCell align="right">{d.MCB_STATUS}</TableCell>
                                        <TableCell>
                                            <Stack direction={"row"} spacing={2}>
                                                <IconButton onClick={
                                                    () => {
                                                        async function update() {
                                                            const id = d.MCB_ID;

                                                            const data = { "MCB_STATUS": "Gagal" };
                                                            try {
                                                                const result = await updateBooking({ id, data });

                                                                if (result) {
                                                                    console.log(result);
                                                                    setOpen(true);
                                                                    setMessage("Success update status")

                                                                    setTimeout(() => {
                                                                        router.reload();
                                                                    }, 2000)
                                                                }
                                                            } catch (err) {
                                                                console.log(err);
                                                            }
                                                        }

                                                        update();
                                                    }
                                                }>
                                                    <DangerousIcon />
                                                </IconButton>
                                                <IconButton onClick={
                                                    () => {
                                                        async function update() {
                                                            const id = d.MCB_ID;

                                                            const data = { "MCB_STATUS": "Lulus" };
                                                            try {
                                                                const result = await updateBooking({ id, data });

                                                                if (result) {
                                                                    console.log(result);
                                                                    setOpen(true);
                                                                    setMessage("Success update status")

                                                                    setTimeout(() => {
                                                                        router.reload();
                                                                    }, 2000)
                                                                }
                                                            } catch (err) {
                                                                console.log(err);
                                                            }
                                                        }

                                                        update();
                                                    }
                                                }>
                                                    <CheckCircleIcon />
                                                </IconButton>
                                                <IconButton onClick={
                                                    () => {
                                                        async function deleteData() {
                                                            const id = d.MCB_ID;

                                                            try {
                                                                const result = await deleteBooking({ id });

                                                                if (result) {
                                                                    console.log(result);
                                                                    setOpen(true);
                                                                    setMessage("Success delete data")

                                                                    setTimeout(() => {
                                                                        router.reload();
                                                                    }, 2000)
                                                                }
                                                            } catch (err) {
                                                                console.log(err);
                                                            }
                                                        }

                                                        deleteData();
                                                    }
                                                }>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            {message}
                        </Alert>
                    </Snackbar>
                </Paper>
            </Zoom>
        </Box>
    );
}

export default SenaraiPeserta;