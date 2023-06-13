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
import { Box, useTheme, Typography, Button, Stack, TextField, Breadcrumbs, Link} from "@mui/material";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {getConsultation} from '../../api/consultation'
import { getUserByIC } from '../../api/user';
import { useRouter } from "next/router";

function Bread() {
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="inherit" href="/marriage_consultation">
                Konsultasi Perkahwinan
            </Link>
            <Link
                underline="hover"
                color="text.primary"
                href="/marriage_consultation/check_consultation"
            >
                Semak Konsultasi
            </Link>
        </Breadcrumbs>
    );
}

const CheckCons = () => {
    const IC = useSelector((state) => state.user.ic);
    const name = useSelector((state) => state.user.name);
    const address = useSelector((state) => state.user.address);
    const phone = useSelector((state) => state.user.phone);

    const user = useSelector((state) => state.user);

    const [checkconsult, setCheckConsult] = useState();
    
    const [result, setResult] = useState();

    const handleChange = (event) => {
        setCheckConsult(event.target.value);
    };
    async function getConsultation() {
        const res = await getUserByIC(IC);

        if (res) {
            console.log(res, "..result");
            setResult(res);
        } else {
            console.log("Error");
        }
    }
    useEffect(() => {
        getConsultation();
    }, [IC]);

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    const router = useRouter();
    const theme = useTheme();

    return (

        <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary }}>
            <Bread/>
            <Typography variant='h5'>Khidmat Nasihat</Typography>
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item xs={6}>
            {
              <Box sx={{mt:2}}>
                  <Typography variant='h6'>Yang Mengadu</Typography>
                  <Stack spacing={2} direction={"row"} sx={{mt:2}}>
                    <div><Typography variant="subtitle1">Nama:</Typography></div>
                    <div><Typography variant="subtitle1">{result?.USER_NAME}</Typography></div>
                  
                  </Stack>
                  <Stack spacing={2} direction={"row"}>
                  <Typography variant="subtitle1">No Kad Pengenalan:</Typography>
                  <Typography variant="subtitle1">{result?.USER_IC}</Typography>
                  </Stack>
                  <Stack spacing={2} direction={"row"}>
                  <Typography variant="subtitle1">No Telefon: </Typography>
                  <Typography variant="subtitle1">{result?.USER_PHONE_NO}</Typography>
                  </Stack> 
              </Box>
            }
        </Grid>
          <Box sx={{mt:4.3}}>
                  <Typography variant='h6'>Yang Kena Adu</Typography>
                  <Stack spacing={2} direction={"row"} sx={{mt:2}}>
                    <div><Typography variant="subtitle1">Nama:</Typography></div>
                    <div><Typography variant="subtitle1">{result?.USER_NAME}</Typography></div>
                  
                  </Stack>
                  <Stack spacing={2} direction={"row"}>
                  <Typography variant="subtitle1">No Kad Pengenalan:</Typography>
                  <Typography variant="subtitle1">{result?.USER_IC}</Typography>
                  </Stack>
                  <Stack spacing={2} direction={"row"}>
                  <Typography variant="subtitle1">No Telefon: </Typography>
                  <Typography variant="subtitle1">{result?.USER_PHONE_NO}</Typography>
                  </Stack> 
              </Box>
        </Grid>
            <Box sx={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: 'center', mt: 5 }}>
                <Box sx={{ width: "50%" }}>
                    <Stack direction="row" spacing={2} justifyContent={'center'}>
                    <Button variant="contained" onClick={() => router.push("/marriage_consultation/apply_consultation")}>Permohonan Baru</Button>
                    </Stack>
                </Box>
            </Box>
            <TableContainer sx={{ mt: 5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">KP / Nama Kena Adu</TableCell>
                            <TableCell align="right">No. Daftar</TableCell>
                            <TableCell align="right">Tarikh Mohon</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="center">Operasi</TableCell>
                            <TableCell align="right">Ulasan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow
                                //key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{result?.USER_NAME}</TableCell>
                                <TableCell align="right">{result?.MC_ID}</TableCell>
                                <TableCell align="right">{result?.MC_CONSULTATION_DATE}</TableCell>
                                <TableCell align="right">{result?.MC_CONSULTATION_STATUS}</TableCell>
                                <TableCell align="center"><Button variant='contained' onClick={() => router.push("/marriage_consultation/apply_consultation")} endIcon={<PageviewIcon />}>
                                </Button><Button variant='contained' onClick={() => router.push("/marriage_consultation/update_consultation")} endIcon={<EditIcon />}></Button>
                                <Button variant='contained' endIcon={<DeleteIcon />}>
                                </Button></TableCell>
                                <TableCell align="right"><Button variant='contained' onClick={() => router.push("/marriage_consultation/advisor_review")} endIcon={<PageviewIcon />}></Button></TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>

    );
}

export default CheckCons;
