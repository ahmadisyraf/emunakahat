import {
    Box
} from "@mui/material";
import CheckCons from "./check_consultation";
import ApplyCons from "./apply_consultation";

//this is marriage consultation package view
export default function MarriageCons() {

    return (
        <Box>
            <CheckCons />
            <ApplyCons />
        </Box>
    );
}