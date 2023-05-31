import {
    Box
} from "@mui/material";
import CheckCons from "./check_consultation";
import DateCons from "./date_consultation";

//this is marriage consultation package view
export default function MarriageCons() {

    return (
        <Box>
            <CheckCons />
            <DateCons />
        </Box>
    );
}