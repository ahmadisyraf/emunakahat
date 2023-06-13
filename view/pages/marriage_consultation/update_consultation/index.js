import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Box, useTheme, Typography, Button, Stack, TextField, Breadcrumbs, Link} from "@mui/material";
import { getConsultationById, getConsultation, insertConsultation } from '../../api/consultation';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
            <Link
                underline="hover"
                color="text.primary"
                href="/marriage_consultation/apply_consultation"
            >
                Kemaskini Konsultasi
            </Link>
        </Breadcrumbs>
    );
}

const UpdateCons = () => {
    const IC = useSelector((state) => state.user.ic);
    const name = useSelector((state) => state.user.name);
    const address = useSelector((state) => state.user.address);
    const phone = useSelector((state) => state.user.phone);

    const [userIC, setUserIC] = useState(IC);
    const [userName, setUserName] = useState(name);
    const [userAddress, setUserAddress] = useState(address);
    const [userPhoneNo, setUserPhoneNo] = useState(phone);

    const user = useSelector((state) => state.user);

    const [applyconsult, setApplyConsult] = useState();
    const router = useRouter();
    const theme = useTheme();
    const id = router.query.id ? router.query.id : null;
    const [result, setResult] = useState();
    const [compPurpose,setCompPurpose] = useState();
    const [compStatement,setCompStatement] = useState();
    const [compSolution,setCompSolution] = useState();

    async function getData() {
        const res = await getConsultationById(IC);
        console.log(res);
        setResult(res);
    }
    const cons_id = result? result._id : null;

    const data = {
        MC_ID: cons_id,
        MC_COMPLAINT_PURPOSE: compPurpose,
        MC_COMPLAINT_STATEMENT: compStatement,
        MC_CONSULTATION_STATUS: "Dalam proses",
    }
    const handleSubmit = async () =>{
        const insert = await insertConsultation({ data });

        if (insert) {
            console.log("Success");
            console.log(insert);
            router.push("/marriage_consultation/date_consultation")
        } else {
            console.log("None");
        }
    }
        
    useEffect(() => {
        getData();
    }, [id]);

    const handleChange = (event) => {
        setCompPurpose(event.target.value);
    };
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
      }));

    return (

        <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary }}>
            <Bread/>
            <Typography variant='h5'>Khidmat Nasihat - Kemaskini Permohonan Konsultasi</Typography>
            <Box sx={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: 'center', mt: 3 }}>
            <Box sx={{ width: "70%" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item sx={{ width:400}}>
                    <Typography variant='h6'>Maklumat Pengadu</Typography>
                    <TextField id="outlined-size-small" label="Nama: " variant="outlined" sx={{mt:1, width:350}} name="Username"
                        autoComplete="Username" defaultValue={" "} value={userName} onChange={(e) => setUserName(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }}
                    /> 
                    <TextField id="outlined-size-small" label="No KP: " variant="outlined" sx={{mt:1, width:350}} name="Identification"
                        autoComplete="Identification" defaultValue={" "} value={userIC} onChange={(e) => setUserIC(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }}
                    /> 
                    <TextField id="outlined-size-small" label="Alamat: " variant="outlined" sx={{mt:1, width:350}} name="Address"
                        autoComplete="Address" defaultValue={" "} value={userAddress} onChange={(e) => setUserAddress(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }}
                    /> 
                    <TextField id="outlined-size-small" label="No Telefon: " variant="outlined" sx={{mt:1, width:350}} name="phoneNo"
                        autoComplete="phoneNo" defaultValue={" "} value={userPhoneNo} onChange={(e) => setUserPhoneNo(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }}
                    /> 
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item sx={{ width:400, mx:5}}>
                    <Typography variant='h6'>Maklumat Yang Kena Adu</Typography>
                    <TextField id="outlined-size-small" label="Nama: " variant="outlined" sx={{mt:1, width:350}} name="Username"
                        autoComplete="Username" defaultValue={" "} value={userName} onChange={(e) => setUserName(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }}
                    /> 
                    <TextField id="outlined-size-small" label="No KP: " variant="outlined" sx={{mt:1, width:350}} name="Identification"
                        autoComplete="Identification" defaultValue={" "} value={userIC} onChange={(e) => setUserIC(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }}
                    /> 
                    <TextField id="outlined-size-small" label="Alamat: " variant="outlined" sx={{mt:1, width:350}} name="Address"
                        autoComplete="Address" defaultValue={" "} value={userAddress} onChange={(e) => setUserAddress(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }}
                    /> 
                    <TextField id="outlined-size-small" label="No Telefon: " variant="outlined" sx={{mt:1, width:350}} name="phoneNo"
                        autoComplete="phoneNo" defaultValue={" "} value={userPhoneNo} onChange={(e) => setUserPhoneNo(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }}
                    /> 
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
                <Button variant="contained" onClick={() => router.push("/marriage_consultation/check_consultation")}>Kemaskini</Button>
                <Button variant="contained" onClick={() => router.push("/marriage_consultation/check_consultation")}>Kembali</Button>
            </Stack>

        </Paper>
    );
}

export default UpdateCons;