import {
    Box,
    Paper,
    Button,
    Typography,
    TextField,
    Stack,
    Breadcrumbs,
    Link
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import KursusListing from "./kursus_listing";

function Bread() {
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="text.primary" href="/kursus_perkahwinan">
                Kursus Pra-Perkahwinan
            </Link>
        </Breadcrumbs>
    );
}

export default function KhursusPerkahwinan() {
    const [showSemakkan, setShowSemakkan] = useState();
    const router = useRouter();
    return (
        <Box sx={{ px: 5 }}>
            <Paper sx={{ mt: 10, px: 3, py: 3 }}>
                <Bread />
                <Typography variant='h4'>Kursus Pra-Perkahwinan</Typography>
                <Stack direction={"row"} spacing={2} sx={{ mt: 5}}>
                    <Button variant="contained" onClick={() => router.push("/kursus_perkahwinan/kursus_check")}>Semakkan</Button>
                    <Button variant="contained" onClick={() => router.push("/kursus_perkahwinan/kursus_listing")}>Daftar</Button>
                </Stack>
            </Paper>
        </Box>
    );
}