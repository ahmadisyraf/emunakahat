import {
    Box,
    Zoom,
    Paper,
    Breadcrumbs,
    Link,
    Typography,
    TextField,
    Grid,
    Button,
    Alert,
    Snackbar
} from "@mui/material";
import { useState, useEffect } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { insertCourse } from "../../api/course";
import { useRouter } from "next/router";

function Bread() {
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="inherit" href="/kursus_perkahwinan/maklumat_kursus">
                Kursus Pra-Perkahwinan
            </Link>
            <Link
                underline="hover"
                color="text.primary"
                href="/kursus_perkahwinan/kursus_check"
            >
                Tambah Kursus Pra-Perkahwinan
            </Link>
        </Breadcrumbs>
    );
}

const TambahKursus = () => {
    const [organizer, setOrganizer] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [price, setPrice] = useState();
    const [venue, setVenue] = useState();
    const [venueAddress, setVenueAddress] = useState();
    const [slot, setSlot] = useState();
    const [officer, setOfficer] = useState();
    const [officerPhone, setOfficerPhone] = useState();
    const [open, setOpen] = useState();
    const router = useRouter();


    const data = {
        "MCL_ORGANIZER_NAME": organizer,
        "MCL_START_DATE": startDate,
        "MCL_END_DATE": endDate,
        "MCL_START_TIME": startTime,
        "MCL_END_TIME": endTime,
        "MCL_PRICE": price,
        "MCL_VENUE_NAME": venue,
        "MCL_VENUE_ADDRESS": venueAddress,
        "MCL_SLOT": slot,
        "MCL_OFFICER_ON_DUTY": officer,
        "MCL_OFFICER_PHONE_NUM": officerPhone,
        "MCL_DISPLAY_PUBLIC": "true",
    }

    const handleSubmit = async () => {
        try {
            const insert = await insertCourse({ data });

            if (insert) {
                console.log(insert, "..success");

                setOpen(true)

                setTimeout(() => {
                    router.push("/kursus_perkahwinan/maklumat_kursus");
                }, 2000);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <Box sx={{ mt: 10, px: 5 }}>
            <Zoom in={true}>
                <Paper sx={{ px: 5, py: 5 }}>
                    <Bread />
                    <Typography variant="h4">Tambah Kursus Pra-Perkahwinan</Typography>
                    <Box sx={{ mt: 5 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Organizer"
                                    defaultValue={" "}
                                    value={organizer}
                                    onChange={(e) => setOrganizer(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Tarikh Mula"
                                        value={startDate}
                                        onChange={(newValue) => setStartDate(newValue)}
                                        sx={{ width: "100%" }}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Tarikh Akhir"
                                        value={endDate}
                                        onChange={(newValue) => setEndDate(newValue)}
                                        sx={{ width: "100%" }}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimePicker
                                        label="Masa bermula"
                                        value={startTime}
                                        onChange={(newValue) => setStartTime(newValue)}
                                        sx={{ width: "100%" }}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimePicker
                                        label="Masa Berakhir"
                                        value={endTime}
                                        onChange={(newValue) => setEndTime(newValue)}
                                        sx={{ width: "100%" }}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Harga"
                                    defaultValue={" "}
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Lokasi"
                                    defaultValue={" "}
                                    value={venue}
                                    onChange={(e) => setVenue(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Alamat"
                                    defaultValue={" "}
                                    value={venueAddress}
                                    onChange={(e) => setVenueAddress(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Kapasiti"
                                    defaultValue={" "}
                                    value={slot}
                                    onChange={(e) => setSlot(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Pegawai Betugas"
                                    defaultValue={" "}
                                    value={officer}
                                    onChange={(e) => setOfficer(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="outlined-controlled"
                                    label="No. Tel. Pegawai"
                                    defaultValue={" "}
                                    value={officerPhone}
                                    onChange={(e) => setOfficerPhone(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth onClick={handleSubmit} color="secondary">Tambah</Button>
                            </Grid>
                        </Grid>
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Kursus berjaya di tambah ke dalam rekod!
                            </Alert>
                        </Snackbar>
                    </Box>
                </Paper>
            </Zoom>
        </Box>
    )
}

export default TambahKursus;