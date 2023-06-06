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
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
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

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
      }));
    return (

        <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary }}>
            <Typography variant='h5'>Khidmat Nasihat - Lihat Permohonan Konsultasi</Typography>
            <Box sx={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: 'center', mt: 3 }}>
            <Box sx={{ width: "70%" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item sx={{ width:400}}>
                    <Typography variant='h6'>Maklumat Pengadu</Typography>
                    <TextField id="outlined-size-small" label="Nama: " variant="outlined" sx={{mt:1, width:350}}/> 
                    <TextField id="outlined-size-small" label="No KP: " variant="outlined" sx={{mt:1, width:350}}/> 
                    <TextField id="outlined-size-small" label="Alamat: " variant="outlined" sx={{mt:1, width:350}}/> 
                    <TextField id="outlined-size-small" label="No Telefon: " variant="outlined" sx={{mt:1, width:350}}/> 
                    </Item>
                </Grid>
                <Grid item xs={6}>
                <Item sx={{ width:400, mx:5}}>
                    <Typography variant='h6'>Maklumat Kena Adu</Typography>
                    <TextField id="outlined-size-small" label="Nama: " variant="outlined" sx={{mt:1, width:350}}/> 
                    <TextField id="outlined-size-small" label="No KP: " variant="outlined" sx={{mt:1, width:350}}/> 
                    <TextField id="outlined-size-small" label="Alamat: " variant="outlined" sx={{mt:1, width:350}}/> 
                    <TextField id="outlined-size-small" label="No Telefon: " variant="outlined" sx={{mt:1, width:350}}/> 
                    </Item>
                </Grid>
            </Grid>
        </Box>
    </Box>
    <Box sx={{display:'flex', justifyContent:'center', mt:3}}>
    <TextField  id="outlined-size-small" label="Tujuan Aduan: " size='small' variant="outlined" sx={{width:300}}/> 
    </Box>
    <Stack direction="row" spacing={2} sx={{mt:3}} justifyContent={'center'}>
            <TextField fullWidth id="outlined-size-small" label="Keterangan Aduan: " multiline rows={4} variant="outlined" size='small'/> 
            <TextField fullWidth id="outlined-size-small" label="Solusi yang telah dibuat: " multiline rows={4} variant="outlined" size='small' sx={{mt:2}}/> 
        </Stack>
        <Box sx={{display:'flex', justifyContent:'center', mt:3}}>
            <TextField  id="outlined-size-small" label="Tarikh Konsultasi: " size='small' variant="outlined" sx={{width:300, mr:2}}/> 
            <TextField  id="outlined-size-small" label="Nama Pegawai Konsultasi: " size='small' variant="outlined" sx={{width:300, mr:2}}/> 
            <TextField  id="outlined-size-small" label="Cara Perjumpaan: " size='small' variant="outlined" sx={{width:300}}/> 
        </Box>
            <Stack direction="row" spacing={2} sx={{mt:2}} justifyContent={'center'}>
                <Button variant="contained">Kemaskini</Button>
                <Button variant="contained">Kembali</Button>
            </Stack>

        </Paper>
    );
}

export default ApplyCons;