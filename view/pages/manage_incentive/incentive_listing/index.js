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
import { useRouter } from 'next/router';

function createData(bil, name, tarikh, status) {
  return { bil, name, tarikh, status };
}

const initialStatusRows = [
  createData(1, "010322063013\nAli Bin Abu", "23-10-2022", "Diterima"),
  createData(2, "991206060129\nRaffi Bin Jalal", "2-3-2023", "Diterima"),
  createData(3, "950120061041\nAkmal Bin Jefri", "5-4-2023", "Ditolak")
];

/* INCENTIVE LISTING */
const IncentiveListing = () => {
  const theme = useTheme();
  const [statusRows, setStatusRows] = useState(initialStatusRows);

  // DELETE APPLICATION
  const handleDeleteApplication = (name) => {
    const updatedRows = statusRows.filter(row => row.name !== name);
    setStatusRows(updatedRows);
  };

  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleDialogClose = () => {
    setOpen(false);
    router.push('/manage_incentive/applicant_info'); // Navigate to the "applicant_info" page
  };

  return (
    <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary, mx: 5 }}>
      <Typography variant='h5'>SENARAI PERMOHONAN INSENTIF</Typography>

      <TableContainer sx={{ mt: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Bil.</TableCell>
              <TableCell>KP / Nama</TableCell>
              <TableCell align="right">Tarikh Terima</TableCell>
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
                  <IconButton aria-label="edit" onClick={handleDialogClose}>
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

export default IncentiveListing;
