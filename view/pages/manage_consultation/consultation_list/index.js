import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box, useTheme, Typography, Button, Stack, TextField} from "@mui/material";
import { useState } from 'react';
import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const rows = [
    createData(1, 123456, '20/5/2023', 'dalam proses')
];

const ConsList = () => {
    const [anjuran, setAnjuran] = useState();

    const handleChange = (event) => {
        setAnjuran(event.target.value);
    };

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    const theme = useTheme();

    return (

        <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary }}>
            <Typography variant='h5'>Khidmat Nasihat - Senarai Pemohon</Typography>
            <Stack direction="row" spacing={2} sx={{mt:5}} justifyContent={'left'}>
                         <TextField id="outlined-size-small" label="No KP Pengadu: " variant="outlined" size='small'/> 
                         <Button variant="contained">Cari</Button>
                    </Stack>
            <Box sx={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: 'left', mt: 5 }}>
                <Box sx={{ width: "50%" }}>
                    <Stack direction="row" spacing={2} justifyContent={'center'}>
                    <Typography variant='subtitle1'>Tapis Carian</Typography>
                    <FormControl size='small' sx={{width:300, mt:2}}>
                        <InputLabel id="demo-simple-select-label">Pilih: </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={anjuran}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Terkini</MenuItem>
                            <MenuItem value={20}>Selesai</MenuItem>
                            <MenuItem value={30}>Belum Selesai</MenuItem>
                            <MenuItem value={30}>Terlama</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="outlined-size-small" label="Tarikh " variant="outlined" size='small'/> 
                    <Button variant="contained">Tapis</Button>
                    </Stack>
                </Box>
            </Box>
            <TableContainer sx={{ mt: 5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Bil.</TableCell>
                            <TableCell align="right">KP / Nama Kena Adu</TableCell>
                            <TableCell align="right">KP / Nama Pengadu</TableCell>
                            <TableCell align="right">No Daftar</TableCell>
                            <TableCell align="right">Tarikh</TableCell>
                            <TableCell align="right">Operasi</TableCell>
                            <TableCell align="right">Ulasan</TableCell>
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
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>

    );
}

export default ConsList;
