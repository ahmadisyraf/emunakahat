import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Button, Stack, Box,FormControl,TextField,} from "@mui/material";

const usersData = [
  { ic: '920101123456', name: 'Ikhsan Bin Fandi', role: 'Pengguna', status: 'Tidak Aktif' },
  { ic: '930202987654', name: 'Anizam Binti Mansor', role: 'Pengguna', status: 'Aktif' },
  { ic: '910302238321', name: 'Aini Binti Zawawi', role: 'Kakitangan', status: 'Aktif' },
  { ic: '910302238321', name: 'Adriana Afandi', role: 'Kakitangan', status: 'Aktif' },
  // Add more user data as needed
];

const UserListing = () => {
  const [users, setUsers] = useState(usersData);

  const handleDeleteUser = (ic) => {

    const updatedUsers = users.filter((user) => user.ic !== ic);
    setUsers(updatedUsers);
  };

  return (
    <Paper elevation={3}sx={{ mt: 10, px: 7, py: 5}}>
      <Typography variant="h4" gutterBottom>
        Senarai Pemohon
      </Typography>
      <Stack sx={{width: "100%", display: 'flex', flexDirection: "row", justifyContent: 'center', mt: 3 }} direction={"row"} spacing={1}>
        <Box sx={{ width: "50%" }}>
          <FormControl fullWidth size='small'>
            <TextField id="outlined-basic" label="No. K/P Pengguna" variant="outlined" />
          </FormControl>
        </Box>
        <Button variant='contained'>Carian</Button>
      </Stack>

      <TableContainer sx={{py:2}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No. Kad Pengenalan</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Peranan</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Operasi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.email}>
                <TableCell>{user.ic}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDeleteUser(user.ic)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button style={{width: "200px", height: "40px",}}
                    type="add"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 4, mb: 1 }}>
                    Tambah Pengguna
                </Button>
    </Paper>
  );
};

export default UserListing;
