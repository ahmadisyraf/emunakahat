import {
    Box,
    Paper,
    Button,
    Typography,
    TextField,
    Stack,
    Breadcrumbs,
    Link,
    Alert
} from "@mui/material";
import { useRouter } from "next/router";

function Bread() {
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="text.primary" href="/mohon_berkahwin">
                Mohon Berkahwin
            </Link>
        </Breadcrumbs>
    );
}



export default function PermohonanBerkahwin() {
    const router = useRouter();
    return (
        <Box sx={{ px: 5 }}>
            <Paper sx={{ mt: 10, px: 3, py: 3 }}>
                <Bread />
                <Typography variant='h4'>Mohon Perkahwinan</Typography>
                <Stack direction={"column"} spacing={2} sx={{ my: 2 }}>
                    <Alert severity="info">Sila pastikan melengkapkan profil anda terdahulu sebelum memohon</Alert>
                    <Alert severity="warning">Pemohon tidak dibenarkan memohon selagi status permohonan masih diproses</Alert>
                </Stack>
                <Stack direction={"row"} spacing={2} sx={{ mt: 5 }}>
                    <Button variant="contained" onClick={() => router.push("/mohon_berkahwin/semakkan_permohonan")}>Semakkan</Button>
                    <Button variant="contained" onClick={() => router.push("/mohon_berkahwin/permohonan_berkahwin")}>Mohon</Button>
                </Stack>
            </Paper>
        </Box>
    );
}