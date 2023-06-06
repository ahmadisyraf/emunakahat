import {
    Box,
    Paper,
    Button,
    Typography,
    TextField,
    Stack
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import KursusListing from "./kursus_listing";

export default function KhursusPerkahwinan() {
    const [showSemakkan, setShowSemakkan] = useState();
    const router = useRouter();
    return (
        <Box sx={{ px: 10 }}>
            <Paper sx={{ mt: 10, px: 3, py: 3 }}>
                <Typography variant='h4'>Kursus Pra-Perkahwinan</Typography>
                <Stack direction={"row"} spacing={2} sx={{ mt: 5}}>
                    <Button variant="contained" onClick={() => router.push("/kursus_perkahwinan/kursus_check")}>Semakkan</Button>
                    <Button variant="contained" onClick={() => router.push("/kursus_perkahwinan/kursus_listing")}>Daftar</Button>
                </Stack>
            </Paper>
        </Box>
    );
}