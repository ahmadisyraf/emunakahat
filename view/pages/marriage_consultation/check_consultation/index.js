import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const CheckCons = () => {
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
            <Typography variant='h5'>Khidmat Nasihat</Typography>
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item xs={6}>
            {
              <Box sx={{mt:2}}>
                  <Typography variant='h6'>Yang Mengadu</Typography>
                  <Stack spacing={2} direction={"row"} sx={{mt:2}}>
                    <div><Typography variant="subtitle1">Nama:</Typography></div>
                    <div><Typography variant="subtitle1">Aminah hasan</Typography></div>
                  
                  </Stack>
                  <Stack spacing={2} direction={"row"}>
                  <Typography variant="subtitle1">No Kad Pengenalan:</Typography>
                  <Typography variant="subtitle1">981221-02-9342</Typography>
                  </Stack>
                  <Stack spacing={2} direction={"row"}>
                  <Typography variant="subtitle1">No Telefon: </Typography>
                  <Typography variant="subtitle1">012-24242524</Typography>
                  </Stack> 
              </Box>
            }
        </Grid>
          <Box sx={{mt:4.3}}>
                  <Typography variant='h6'>Yang Kena Adu</Typography>
                  <Stack spacing={2} direction={"row"} sx={{mt:2}}>
                    <div><Typography variant="subtitle1">Nama:</Typography></div>
                    <div><Typography variant="subtitle1">Amri husin</Typography></div>
                  
                  </Stack>
                  <Stack spacing={2} direction={"row"}>
                  <Typography variant="subtitle1">No Kad Pengenalan:</Typography>
                  <Typography variant="subtitle1">921212-03-9541</Typography>
                  </Stack>
                  <Stack spacing={2} direction={"row"}>
                  <Typography variant="subtitle1">No Telefon: </Typography>
                  <Typography variant="subtitle1">012-24242524</Typography>
                  </Stack> 
              </Box>
        </Grid>
            <Box sx={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: 'center', mt: 5 }}>
                <Box sx={{ width: "50%" }}>
                    <Stack direction="row" spacing={2}>
                    <TextField id="outlined-size-small" label="No K/P Yang Kena Adu:" variant="outlined" />
                    <Button variant="contained">Semak</Button>
                    <Button variant="contained">Permohonan Baru</Button>
                    </Stack>
                </Box>
            </Box>
            <TableContainer sx={{ mt: 5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Bil.</TableCell>
                            <TableCell align="right">KP / Nama Kena Adu</TableCell>
                            <TableCell align="right">No. Daftar</TableCell>
                            <TableCell align="right">Tarikh Mohon</TableCell>
                            <TableCell align="right">Status</TableCell>
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
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>

    );
}

export default CheckCons;
