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


const  RevCons = () => {
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
            <Typography variant='h5'>Khidmat Nasihat - Ulasan Konsultasi</Typography>
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
            <Stack direction="row" spacing={2} sx={{mt:3}} justifyContent={'center'}>
                         <TextField fullWidth id="outlined-size-small" label="Keterangan Aduan: " multiline rows={4} variant="outlined" size='small'/> 
                         <TextField fullWidth id="outlined-size-small" label="Ulasan Penasihat: " multiline rows={4} variant="outlined" size='small' sx={{mt:2}}/> 
                    </Stack> 
            <Stack direction="row" spacing={2} sx={{mt:2}} justifyContent={'center'}>
                <Button variant="contained">Kembali</Button>
                <Button variant="contained">Kemaskini</Button>
            </Stack>
        </Paper>

    );
}

export default RevCons;
