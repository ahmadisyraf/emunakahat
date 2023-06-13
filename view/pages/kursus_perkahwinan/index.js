import {
    Box,
    Paper,
    Button,
    Typography,
    TextField,
    Stack,
    Breadcrumbs,
    Link,
    Zoom
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
            <Zoom in={true}>
                <Paper sx={{ mt: 10, px: 3, py: 3 }}>
                    <Bread />
                    <Typography variant='h4'>Kursus Pra-Perkahwinan</Typography>
                    <Typography sx={{ mt: 2 }}>
                        1. Hanya peserta yang berdaftar sahaja dibenarkan menyertai kursus pada hari yang berkenaan <br />
                        2. Bayaran penyertaan hendaklah dilakukan di kaunter Pejabat Agama Islam Daerah sebelum tarikh pelaksanaan kursus.<br />
                        3. Pengesahan kehadiran hendaklah dibuat pada hari kursus dan pada setiap slot yang dijalankan.<br />
                        4. Penangguhan kursus dibenarkan untuk satu kali sahaja dan hendaklah dibuat sekurang-kurangnya seminggu awal daripada tarikh yang didaftarkan kepada satu sesi kursus yang dibuka pendaftarannya sahaja. Tiada sebarang caj dikenakan.<br />
                        5. Penangguhan kursus hanya dibuat selepas memuat naik bukti pembayaran yuran kursus.<br />
                        6. Penangguhan kurang dari tempoh seminggu, bayaran penangguhan sebanyak RM40.00 akan dikenakan.<br />
                        7. Penangguhan kursus boleh dibuat dengan klik button TUKAR MASA untuk pilih masa lain kursus tersebut.
                        8. Ketidakhadiran tanpa maklum akan mengakibatkan pendaftaran kursus terbatal dan yuran tidak akan dikembalikan. Pendaftaran baharu perlu dibuat bagi mengikuti semula kursus.<br />
                        9. Pembatalan pendaftaran kursus, yuran tidak akan dikembalikan.<br />
                        10. Peserta kursus hendaklah berpakaian kemas, sopan dan menutup aurat. Pakaian jarang dan ketat adalah dilarang sama sekali.<br />
                        11. Peserta hendaklah menjaga adab dan tingkahlaku serta tidak menimbulkan suasana tidak tenteram sepanjang masa kursus ini berjalan.<br />
                        12. Peserta yang hadir ke kursus juga hendaklah mematuhi langkah-langkah keselamatan yang telah ditetapkan oleh pihak penganjur dan Pejabat Agama Islam Daerah.<br />
                        13. Sebarang masalah berkaitan kursus, sila rujuk/maklum kepada urusetia bertugas. Peserta hendaklah mematuhi segala peraturan dan arahan dari semasa ke semasa oleh urusetia.<br />
                    </Typography>
                    <Stack direction={"row"} spacing={2} sx={{ mt: 5 }}>
                        <Button variant="contained" onClick={() => router.push("/kursus_perkahwinan/kursus_check")}>Semakkan</Button>
                        <Button variant="contained" onClick={() => router.push("/kursus_perkahwinan/kursus_listing")}>Daftar</Button>
                    </Stack>
                </Paper>
            </Zoom>
        </Box>
    );
}