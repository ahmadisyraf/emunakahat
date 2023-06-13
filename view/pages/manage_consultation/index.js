import {
    Box
} from "@mui/material";
import AdvInfo from "./advisor_info";
import ConsApproval from "./consultation_approval";
import ConsDetails from "./consultation_details";
import ConsList from "./consultation_list";
import TTUpdate from "./timetable_update";
import ConsTT from "./consultation_timetable";
import RevCons from "./review_consultation";

//this is marriage consultation package view
export default function ManageCons() {

    return (
        <Box sx={{ px: 5 }}>
            {/* <AdvInfo /> */}
            {/* <ConsApproval /> */}
            <ConsDetails/>
            {/* <ConsList/> */}
            {/* <TTUpdate/> */}
            {/* <ConsTT/> */}
            {/* <RevCons/> */}
        </Box>
    );
}