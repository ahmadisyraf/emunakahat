import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, useTheme, Typography, Stack, Button, IconButton, Breadcrumbs, Link, Zoom } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useSelector } from 'react-redux';
import { getBookingById } from '../../api/course';

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
    const [anjuran, setAnjuran] = useState();
    const IC = useSelector((state) => state.user.ic);
    const [result, setResult] = useState();

    const handleChange = (event) => {
        setAnjuran(event.target.value);
    };

    // async function getBooking() {
    //     const res = await getBookingById(IC);

    //     if (res) {
    //         console.log(res, "..result");
    //         setResult(res);
    //     } else {
    //         console.log("Error");
    //     }
    // }

    // useEffect(() => {
    //     getBooking();
    // }, [IC]);

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
                                    <TableCell>No. Kad Pengenalan</TableCell>
                                    {/* <TableCell align="right">Nama</TableCell> */}
                                    <TableCell align="right">No. Siri Taklimat</TableCell>
                                    {/* <TableCell align="right">Tarikh Mohon</TableCell> */}
                                    <TableCell align="right">Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {result?.MCB_USER_IC}
                                    </TableCell>
                                    <TableCell align="right">{result?._id}</TableCell>
                                    <TableCell align="right" sx={{ color: "green" }}>{result?.MCB_STATUS}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Zoom>
        </Box>
    );
}

export default SenaraiPeserta;