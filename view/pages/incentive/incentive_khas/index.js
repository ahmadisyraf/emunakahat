import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, useTheme, Typography, Stack, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


function createData(name, alamat, telefon, pendapatan) {
  return { name, alamat, telefon, pendapatan };
}

const pemohonRows = [
  createData('010322063013\nAli Bin Abu', 'No15 Taman Mentiga, 26600 Pekan Pahang', '0125517084', 2000.00),
];

const pasanganRows = [
  createData('020620062134\nSalwa Binti Ahmad', 'No116 Taman Ixora, 26800 Kuala Rompin Pahang', '0175482902', 2000.00),
];

const IncentiveKhas = () => {
  const [anjuran, setAnjuran] = useState('');

  const handleChange = (event) => {
    setAnjuran(event.target.value);
  };

  const theme = useTheme();

  {/*Semak Kelayakan*/}
  const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
        <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary }}>
            <Typography variant='h4'>Insentif Khas Pasangan Pengantin</Typography>
            <Stack sx={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: 'center', mt: 5 }} direction={"row"} spacing={1}>
                <Box sx={{ width: "50%" }}>
                <FormControl fullWidth size='small'>
                    <TextField id="outlined-basic" label="Sila Masukkan No. K/P" variant="outlined" />
                </FormControl>
                </Box>
                <Button variant='contained'>Buat Semakan</Button>
            </Stack>

            <TableContainer sx={{ mt: 5 }}>
                <Typography variant='h5'>Pemohon</Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>KP / Nama</TableCell>
                        <TableCell align="left">Alamat Semasa</TableCell>
                        <TableCell align="left">No. Telefon Bimbit</TableCell>
                        <TableCell align="right">Pendapatan (RM)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pemohonRows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row" sx={{ whiteSpace: 'pre-wrap' }}>
                            {row.name}
                            </TableCell>
                            <TableCell align="left">{row.alamat}</TableCell>
                            <TableCell align="left">{row.telefon}</TableCell>
                            <TableCell align="right">{row.pendapatan}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TableContainer sx={{ mt: 5 }}>
                <Typography variant='h5'>Pasangan</Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>KP / Nama</TableCell>
                        <TableCell align="left">Alamat Semasa</TableCell>
                        <TableCell align="left">No. Telefon Bimbit</TableCell>
                        <TableCell align="right">Pendapatan (RM)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pasanganRows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row" sx={{ whiteSpace: 'pre-wrap' }}>
                            {row.name}
                            </TableCell>
                            <TableCell align="left">{row.alamat}</TableCell>
                            <TableCell align="left">{row.telefon}</TableCell>
                            <TableCell align="right">{row.pendapatan}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Submit button */}
            <div>
                <Stack sx={{ justifyContent: 'center', width: "fit-content", mt: 2 }}>
                <Button variant="contained" onClick={handleClickOpen}>Semak Kelayakan</Button>
                </Stack>
                <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-description"
                >
                
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    Tahniah! Anda layak menerima insentif.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose} autoFocus>
                        Seterusnya
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        </Paper>

        
  );
}

export default IncentiveKhas;
