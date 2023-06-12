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
import CheckCons from "./check_consultation";
import DateCons from "./date_consultation";
import ApplyCons from "./apply_consultation";
import UpdateCons from "./update_consultation";
import AdvView from "./advisor_review";

function Bread() {
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="text.primary" href="/marriage_consultation">
                Konsultasi Perkahwinan
            </Link>
        </Breadcrumbs>
    );
}
//this is marriage consultation package view
export default function MarriageCons() {

    //const [showSemakkan, setShowSemakkan] = useState();
    const router = useRouter();
    return (
        <Box sx={{ px: 5 }}>
            <Paper sx={{ mt: 10, px: 3, py: 3 }}>
                <Bread />
                <Typography variant='h4'>Konsultasi Perkahwinan</Typography>
                <Stack direction={"row"} spacing={2} sx={{ mt: 5}}>
                    <Button variant="contained" onClick={() => router.push("/marriage_consultation/check_consultation")}>Semakkan</Button>
                    <Button variant="contained" onClick={() => router.push("/marriage_consultation/apply_consultation")}>Daftar</Button>
                </Stack>
            </Paper>
        </Box>
    );
}