import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, useTheme, Typography, Button, Stack, TextField} from "@mui/material";
import { useState } from 'react';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ApplyCons = () => {
    const [anjuran, setAnjuran] = useState();

    const handleChange = (event) => {
        setAnjuran(event.target.value);
    };

    const theme = useTheme();
    return (

        <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary }}>
            <Typography variant='h5'>Khidmat Nasihat - Permohonan Baru</Typography>
            <Box sx={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: 'center', mt: 5 }}>
            <Box sx={{ width: "50%" }}>
                    <FormControl fullWidth size='small'>
                        <InputLabel id="demo-simple-select-label">Pilih Tarikh :</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={anjuran}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>10/7/2023</MenuItem>
                            <MenuItem value={20}>11/7/2023</MenuItem>
                            <MenuItem value={30}>12/7/2023</MenuItem>
                        </Select>
                    </FormControl>
                    <Stack direction="row" spacing={2} sx={{mt:2}}>
                    <FormControl fullWidth size='small'>
                        <InputLabel id="demo-simple-select-label">Pilih Masa :</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={anjuran}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>2:00 p.m - 3:00 p.m</MenuItem>
                            <MenuItem value={20}>3:00 p.m - 4:00 p.m</MenuItem>
                            <MenuItem value={30}>4:00 p.m - 5:00 p.m</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth size='small'>
                        <InputLabel id="demo-simple-select-label">Pilih Cara Perjumpaan :</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={anjuran}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Atas Talian</MenuItem>
                            <MenuItem value={20}>Di Pejabat Daerah Anda</MenuItem>
                        </Select>
                    </FormControl>
                    </Stack>
                    <FormControl fullWidth size='small' sx={{mt:2}}>
                        <InputLabel id="demo-simple-select-label">Pilih Penasihat :</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={anjuran}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ali bin Abu</MenuItem>
                            <MenuItem value={20}>Marwan bin Masdo</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <TableContainer sx={{ mt: 5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Bil.</TableCell>
                            <TableCell align="right">ID/ Nama Pengawai penasihat</TableCell>
                            <TableCell align="right">Jabatan</TableCell>
                            <TableCell align="right">No. Telefon Bimbit</TableCell>
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained">Seterusnya</Button>
        </Paper>
    );
}

export default ApplyCons;