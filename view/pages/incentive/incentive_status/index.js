import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import { useTheme, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';

function createData(bil, name, tarikh, status) {
  return { bil, name, tarikh, status };
}

const initialStatusRows = [
    createData(1, "010728060073","15-06-2023", "Diterima")
  ];

/* INCENTIVE STATUS */
const IncentiveStatus = () => {
  const theme = useTheme();
  const [statusRows, setStatusRows] = useState(initialStatusRows);

  // DELETE APPLICATION
  const handleDeleteApplication = (name) => {
    const updatedRows = statusRows.filter(row => row.name !== name);
    setStatusRows(updatedRows);
  };


  //EDIT APPLICATION
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(false);
    router.push('/incentive/apply_incentive'); // Navigate to the "apply incentive" page
  };

  // Define breadcrumb links and their corresponding routes
  const breadcrumbLinks = [
    { label: 'Semak Kelayakan', href: '/incentive/incentive_khas' },
    { label: 'Muat Naik Dokumen', href: '/incentive/upload_document' },
    { label: 'Permohonan Insentif', href: '/incentive/apply_incentive' },
    { label: 'Status Permohonan', href: '/incentive/incentive_status' },
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
        
      <Typography variant='h5'>STATUS PERMOHONAN</Typography>

      <TableContainer sx={{ mt: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Bil.</TableCell>
              <TableCell>KP / Nama</TableCell>
              <TableCell align="right">Tarikh Hantar</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right" colSpan={2}>Operasi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statusRows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{row.bil}</TableCell>
                <TableCell component="th" scope="row" sx={{ whiteSpace: 'pre-wrap' }}>
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.tarikh}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right" style={{ paddingTop: '0.5rem' }}>
                    <IconButton
                        aria-label="delete"
                        onClick={() => handleDeleteApplication(row.name)}
                    >
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="edit" onClick={handleClickOpen}>
                        <EditIcon />
                    </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default IncentiveStatus;
