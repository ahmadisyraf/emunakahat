import {
    Box
} from "@mui/material";
import CheckCons from "./check_consultation";
import DateCons from "./date_consultation";
import ApplyCons from "./apply_consultation";
import UpdateCons from "./update_consultation";
import AdvView from "./advisor_review";

//this is marriage consultation package view
export default function MarriageCons() {

    return (
        <Box sx={{ px: 5 }}>
            {/* <CheckCons /> */}
            {/* <DateCons /> */}
            <ApplyCons/>
            {/* <UpdateCons/> */}
            {/* <AdvView/> */}
        </Box>
    );
}