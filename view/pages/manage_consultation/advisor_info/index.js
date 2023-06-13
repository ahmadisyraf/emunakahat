import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Box, useTheme, Typography, Button, Stack, TextField} from "@mui/material";
import { useState } from 'react';



const AdvInfo = () => {
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
            <Typography variant='h5'>Khidmat Nasihat - Informasi Penasihat</Typography>
            <Typography variant='subtitle1' sx={{mt:3}}>Maklumat Pegawai Penasihat</Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} sx={{mt:3}}>
                    <Item sx={{ width:400}}>
                        <TextField  id="outlined-size-small" label="Nama Penasihat " variant="outlined" size='small' sx={{width:300, mt:2}}/> 
                        <TextField  id="outlined-size-small" label="ID: " variant="outlined" size='small' sx={{width:300, mt:2}}/> 
                        <FormControl size='small' sx={{width:300, mt:2}}>
                        <InputLabel id="demo-simple-select-label">Jabatan: </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={anjuran}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Cameron Highland</MenuItem>
                            <MenuItem value={20}>Lipis</MenuItem>
                            <MenuItem value={20}>Jerantut</MenuItem>
                            <MenuItem value={20}>Raub</MenuItem>
                            <MenuItem value={20}>Termerloh</MenuItem>
                            <MenuItem value={20}>Maran</MenuItem>
                            <MenuItem value={20}>Kuantan</MenuItem>
                            <MenuItem value={20}>Bentong</MenuItem>
                            <MenuItem value={20}>Bera</MenuItem>
                            <MenuItem value={20}>Pekan</MenuItem>
                            <MenuItem value={20}>Rompin</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField  id="outlined-size-small" label="No telefon: " variant="outlined" size='small' sx={{width:300, mt:2}}/> 
                    </Item>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} sx={{mt:3}}>
                    <Item sx={{ width:400}}>
            <FormControl size='small' sx={{width:300, mt:2}}>
                        <InputLabel id="demo-simple-select-label">Pilih tarikh: </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={anjuran}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Cameron Highland</MenuItem>
                            <MenuItem value={20}>Lipis</MenuItem>
                            <MenuItem value={20}>Jerantut</MenuItem>
                            <MenuItem value={20}>Raub</MenuItem>
                            <MenuItem value={20}>Termerloh</MenuItem>
                            <MenuItem value={20}>Maran</MenuItem>
                            <MenuItem value={20}>Kuantan</MenuItem>
                            <MenuItem value={20}>Bentong</MenuItem>
                            <MenuItem value={20}>Bera</MenuItem>
                            <MenuItem value={20}>Pekan</MenuItem>
                            <MenuItem value={20}>Rompin</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl size='small' sx={{width:300, mt:2}}>
                        <InputLabel id="demo-simple-select-label">Pilih Waktu: </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={anjuran}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Cameron Highland</MenuItem>
                            <MenuItem value={20}>Lipis</MenuItem>
                            <MenuItem value={20}>Jerantut</MenuItem>
                            <MenuItem value={20}>Raub</MenuItem>
                            <MenuItem value={20}>Termerloh</MenuItem>
                            <MenuItem value={20}>Maran</MenuItem>
                            <MenuItem value={20}>Kuantan</MenuItem>
                            <MenuItem value={20}>Bentong</MenuItem>
                            <MenuItem value={20}>Bera</MenuItem>
                            <MenuItem value={20}>Pekan</MenuItem>
                            <MenuItem value={20}>Rompin</MenuItem>
                        </Select>
                    </FormControl>
                    </Item>
                </Grid>
            </Grid>
            <Stack direction="row" spacing={2} sx={{mt:3}} justifyContent={'center'}>
                <Button variant="contained">Kemaskini</Button>
                <Button variant="contained">Kembali</Button>
            </Stack>

        </Paper>
    );
}

export default AdvInfo;