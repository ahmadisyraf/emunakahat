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
import { useState } from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useRouter } from "next/router";
import { getCourse, deleteCourse } from '../../api/course';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Bread() {
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="text.primary" href="/kursus_perkahwinan">
                Malumat Kursus Pra-Perkahwinan
            </Link>
        </Breadcrumbs>
    );
}

const MaklumatKursus = ({ res }) => {
    const [anjuran, setAnjuran] = useState();
    const router = useRouter();

    const handleChange = (event) => {
        setAnjuran(event.target.value);
    };

    console.log(res);

    const theme = useTheme();
    return (
        <Box sx={{ px: 5 }}>
            <Zoom in={true}>
                <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary }}>
                    <Bread />
                    <Typography variant='h4'>Maklumat Kursus Pra-Perkahwinan</Typography>
                    <Box sx={{ mt: 2, width: "100%", textAlign: "right" }}>
                        <Button variant="contained" color='secondary' onClick={() => router.push("/kursus_perkahwinan/tambah_kursus")}>Tambah Kursus</Button>
                    </Box>
                    <TableContainer sx={{ mt: 5 }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Anjuran</TableCell>
                                    <TableCell align="right">Tempat</TableCell>
                                    <TableCell align="right">Tarikh</TableCell>
                                    <TableCell align="right">Kapasiti</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {res.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.MCL_ORGANIZER_NAME}
                                        </TableCell>
                                        <TableCell align="right">{row.MCL_VENUE_NAME}</TableCell>
                                        <TableCell align="right">{row.MCL_START_DATE} hingga {row.MCL_END_DATE}</TableCell>
                                        <TableCell align="right">{row.MCL_SLOT}</TableCell>
                                        <TableCell align='right'>
                                            {/* <Button variant='contained' endIcon={<HowToRegIcon />} onClick={() => router.push(`/kursus_perkahwinan/daftar_kursus/${row._id}`)}>Daftar
                                        </Button> */}
                                            <Stack direction={"row"}>
                                                <IconButton onClick={() => router.push(`/kursus_perkahwinan/kemaskini_kursus/${row._id}`)}>
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton
                                                    onClick={async () => {
                                                        const id = row._id;

                                                        try {
                                                            const result = await deleteCourse({ id });

                                                            if (result) {
                                                                console.log(result);
                                                                router.reload();
                                                            }
                                                        } catch (err) {
                                                            console.log(err);
                                                        }
                                                    }}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Zoom>
        </Box>
    );
}

export default MaklumatKursus;

export const getStaticProps = async () => {
    const res = await getCourse();

    return {
        props: {
            res: res,
        }
    }
}