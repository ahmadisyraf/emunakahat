import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, useTheme, Typography, Stack, Button, IconButton } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('03333-ali', "KTN2M3/2022-001", "28-29 Januari 2023", "UNTUK DLULSKAN"),
    createData('03344-ahmed', "KTN2M3/2022-002", "28-29 Januari 2023", "UNTUK DLULSKAN"),
    createData('05445-moh', "KTN2M3/2022-003", "28-29 Januari 2023", "UNTUK DLULSKAN"),
    createData('00494-waleed', "KTN2M3/2022-004", "28-29 Januari 2023", "UNTUK DLULSKAN"),
];

const KursusListing = () => {
    const [anjuran, setAnjuran] = useState();

    const handleChange = (event) => {
        setAnjuran(event.target.value);
    };

    const theme = useTheme();
    return (
        <Box sx={{ px: 5 }}>
            <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary }}>
                <Typography variant='h4'>PENDAFTRAN PERKAHWINAN</Typography>
                <Stack sx={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: 'center', mt: 5 }} direction={"row"} spacing={1}>
                    <Box sx={{ width: "50%" }}>
                        <FormControl fullWidth size='small'>
                            <InputLabel id="demo-simple-select-label">Anjuran:</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={anjuran}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button variant='contained'>Cari</Button>
                </Stack>

                <TableContainer sx={{ mt: 5 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>No.KP/Nama SUAMI</TableCell>
                                <TableCell align="right">No.Akuan Terima</TableCell>
                                <TableCell align="right">Tarikh</TableCell>
                                <TableCell align="right">Status</TableCell>
                                
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    <TableCell align='right'><Button variant='contained' endIcon={<HowToRegIcon />}>Operasi</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default KursusListing;