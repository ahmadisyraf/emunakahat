import {
    Box
} from "@mui/material";
import IncentiveListing from "./incentive_listing";
import ApplicantInfo from "./applicant_info";


export default function ManageIncentive() {
    return (
        <Box sx={{ px: 5 }}>
            <IncentiveListing />
            <ApplicantInfo/>
        </Box>
    );
}