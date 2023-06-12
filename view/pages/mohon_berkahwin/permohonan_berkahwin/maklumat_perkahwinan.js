import {
    Container,
    Grid,
    Box,
    TextField,
    FormControl,
    Stack,
    Typography,
    Button,
    InputLabel,
    Select,
    Manu,
    MenuItem,
    InputAdornment,
    Alert,
    Snackbar
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSelector } from "react-redux";
// import { DemoContainer } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState } from "react";
import { insertMarriageRequest } from "../../api/marriage_request";
import { useRouter } from "next/router";

const MaklumatPerkahwinan = () => {
    const [tarikhNikah, setTarikhNikah] = useState(null);
    const [masaNikah, setMasaNikah] = useState();
    const [tempatAkad, setTempatAkad] = useState();
    const [jenisMasKahwin, setJenisMaskawin] = useState();
    const [masKahwin, setMasKahwin] = useState();
    const [hantaranKahwin, setHantaranKahwin] = useState();
    const [namaWali, setNamaWali] = useState();
    const [waliIC, setWaliIC] = useState();
    const [juruNikah, setJuruNikah] = useState();
    const [resit, setResit] = useState();
    const ic = useSelector((state) => state.user.ic);
    const partner_ic = useSelector((state) => state.user.partner_ic);
    const router = useRouter();

    const data = {
        "USER_IC": ic,
        "PARTNER_IC": partner_ic,
        "MR_MARRIAGE_DATE": tarikhNikah,
        "MR_MARRIAGE_TIME": masaNikah,
        "MR_MARRIAGE_VENUE": tempatAkad,
        "MR_MASKAHWIN_TYPE": jenisMasKahwin,
        "MR_MASKAHWIN": masKahwin,
        "MR_HANTARAN": hantaranKahwin,
        "MR_JURUNIKAH_NAME": juruNikah,
        "MR_WALI_NAME": namaWali,
        "MR_WALI_IC": waliIC,
        "MR_STATUS": "Dalam process",
    }

    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const handleSubmit = async () => {
        try {
            const insert = await insertMarriageRequest({ data });

            if (insert) {
                setOpen(true);
                console.log(insert);

                // setTimeout(() => {
                //     router.push("/mohon_berkahwin/semakkan_permohonan");
                // }, 2000);
            }
        } catch (err) {
            setOpen(true)
            console.log(err);
        }
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box component="form" noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant={"h4"}>Butiran Perkahwinan</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Tarikh Nikah"
                                value={tarikhNikah}
                                onChange={(newValue) => setTarikhNikah(newValue)}
                                sx={{ width: "100%" }}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                label="Masa Nikah"
                                value={masaNikah}
                                onChange={(newValue) => setMasaNikah(newValue)}
                                sx={{ width: "100%" }}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="marriagePlace"
                            label="Tempat Akad Nikah"
                            name="marriagePlace"
                            autoComplete="marriagePlace"
                            onChange={(e) => setTempatAkad(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Jenis Mas Kahwin</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={gender || ""}
                                label="Jenis Mas Kahwin"
                                onChange={(e) => setJenisMaskawin(e.target.value)}
                            >
                                <MenuItem value={"Tunai"}>Tunai</MenuItem>
                                <MenuItem value={"Barang kemas"}>Barang Kemas</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="dowry"
                            label="Mas Kahwin"
                            name="dowry"
                            autoComplete="dowry"
                            onChange={(e) => setMasKahwin(e.target.value)}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="dowry"
                            label="Hantaran Kahwin"
                            name="dowry"
                            autoComplete="dowry"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                            }}
                            onChange={(e) => setHantaranKahwin(e.target.value)}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="waliName"
                            label="Nama Wali"
                            name="waliName"
                            autoComplete="waliName"
                            onChange={(e) => setNamaWali(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="waliName"
                            label="Wali IC"
                            name="waliName"
                            autoComplete="waliName"
                            onChange={(e) => setWaliIC(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="matchmaker"
                            label="Nama Jurunikah"
                            name="matchmaker"
                            autoComplete="matchmaker"
                            onChange={(e) => setJuruNikah(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h4" sx={{ py: 2 }}>Pembayaran Nikah</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                            Pembayaran yuran nikah adalah sebanyak RM 5.00. Selepas
                            membuat pembayaran, sila muat naik resit sebagai bukti pembayaran.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Nama Bank:
                            </Typography>
                            <Typography>
                                Bank Islam
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{ fontWeight: "bold" }}>
                                No. Akaun:
                            </Typography>
                            <Typography>
                                1234567890
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                            Muat naik resit pembayaran*
                        </Typography>
                        <TextField
                            required
                            fullWidth
                            id="relay"
                            label="No Resit"
                            name="relay"
                            autoComplete="relay"
                            sx={{ my: 2 }}
                            onChange={(e) => setResit(e.target.value)}
                        />
                        <Button variant={"contained"} fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
                            Mohon
                        </Button>
                    </Grid>
                </Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Tahniah! Permohonan anda berjaya
                    </Alert>
                </Snackbar>
                <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
                    <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
                        Maaf, Permohonan anda tidak berjaya
                    </Alert>
                </Snackbar>
            </Box>
        </Box>
    )
}

export default MaklumatPerkahwinan;