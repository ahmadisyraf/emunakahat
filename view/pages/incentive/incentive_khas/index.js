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
import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useRouter } from 'next/router';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { getUserByIC } from '../../api/user';
import { useSelector } from 'react-redux';




function createData(ic, alamat, telefon, pendapatan) {
  return { ic, alamat, telefon, pendapatan };
}

const pemohonRows = [
  createData("010322063013\nAli Bin Abu", "No15 Taman Mentiga, 26600 Pekan Pahang", "0125517084", 2000.00),
];

const pasanganRows = [
  createData("020620062134\nSalwa Binti Ahmad", "No116 Taman Ixora, 26800 Kuala Rompin Pahang", "0175482902", 2000.00),
];

const IncentiveKhas = () => {

  const [anjuran, setAnjuran] = useState('');
  const [user, setUser] = useState();
  const [partner, setPartner] = useState({})
  const ic = useSelector((state) => state.user.ic);
  const partneric = useSelector((state) => state.user.partner_ic.trim());

  const handleChange = (event) => {
    setAnjuran(event.target.value);
  };

  async function getUserData() {
    try {
      const userD = await getUserByIC({ ic });

      if (userD) {
        setUser(userD);
      }

      const partnerD = await getUserByIC({ "ic" : partneric });

      if (partner) {
        setPartner(partnerD);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserData();
  }, [ic, partneric]);

  // console.log(user, "..test jhe")

  const theme = useTheme();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    router.push('/incentive/upload_document'); // Navigate to the "UploadDocument" page
  };

  // Define breadcrumb links and their corresponding routes
  const breadcrumbLinks = [
    { label: 'Semak Kelayakan', href: '/incentive/incentive_khas' },

  ];

  return (
    <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary, mx: 5 }}>

      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        {breadcrumbLinks.map((link, index) => {
          const isLast = index === breadcrumbLinks.length - 1;
          return isLast ? (
            <Typography key={index} color="text.primary">
              {link.label}
            </Typography>
          ) : (
            <Link key={index} color="inherit" href={link.href}>
              {link.label}
            </Link>
          );
        })}
      </Breadcrumbs>

      <Typography variant='h4'>INSENTIF KHAS PASANGAN PENGANTIN</Typography>
      <TableContainer sx={{ mt: 5 }}>
        <Typography variant='h6'>PEMOHON</Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>KP / Nama</TableCell>
              <TableCell align="right">Alamat Semasa</TableCell>
              <TableCell align="right">No. Telefon Bimbit</TableCell>
              <TableCell align="right">Pendapatan (RM)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {user.map((row) => ( */}
            <TableRow key={user?.USER_IC} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" sx={{ whiteSpace: 'pre-wrap' }}>
                {user?.USER_IC}
              </TableCell>
              <TableCell align="right">{user?.USER_ADDRESS}</TableCell>
              <TableCell align="right">{user?.USER_PHONE_NO}</TableCell>
              <TableCell align="right">{user?.USER_SALARY}</TableCell>
            </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer sx={{ mt: 5 }}>
        <Typography variant='h6'>PASANGAN</Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>KP / Nama</TableCell>
              <TableCell align="right">Alamat Semasa</TableCell>
              <TableCell align="right">No. Telefon Bimbit</TableCell>
              <TableCell align="right">Pendapatan (RM)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {pasanganRows.map((row) => ( */}
              <TableRow key={partner.USER_IC} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ whiteSpace: 'pre-wrap' }}>
                  {partner.USER_IC}
                </TableCell>
                <TableCell align="right">{partner.USER_ADDRESS}</TableCell>
                <TableCell align="right">{partner.USER_PHONE_NO}</TableCell>
                <TableCell align="right">{partner.USER_SALARY}</TableCell>
              </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>

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
