import { useState, useEffect} from 'react';
import * as React from 'react';
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
import {Button, useTheme, Stack, Box,FormControl,TextField,} from "@mui/material";
import { useRouter } from "next/router";
import { getUsers } from '../../api/user';


const UserListing = ({ res }) => {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  console.log(res,"IUIUI");

  const theme = useTheme();

  const handleDeleteUser = (ic) => {

    const updatedUsers = users.filter((user) => user.ic !== ic);
    setUsers(updatedUsers);
  };

  const handleShowStaffRegister = () => {
    setShowStaffRegister(true);
    setError("");
    setInfo("");
}

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
              <TableCell>Operasi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {res.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                                        {row.USER_EMAIL}
                                    </TableCell>
                <TableCell>{row.USER_IC}</TableCell>
                <TableCell>{row.USER_NAME}</TableCell>
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
                    onClick={() => handleShowStaffRegister}
                    sx={{ mt: 4, mb: 1 }}>
                    Tambah Pengguna
                </Button>
                
    </Paper>
  );
};

export default UserListing;

export const getStaticProps = async () => {
  const res = await getUsers();

  return {
      props: {
          res: res,
      }
  }
}