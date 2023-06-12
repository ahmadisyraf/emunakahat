import {
    Box
} from "@mui/material";
import IncentiveKhas from "./incentive_khas";
import UploadDocument from "./upload_document";
import ApplyIncentive from "./apply_incentive";
import IncentiveStatus from "./incentive_status";


export default function Incentive() {
    return (
        <Box sx={{ px: 5 }}>
            <IncentiveKhas />
            <UploadDocument />
            <ApplyIncentive />
            <IncentiveStatus />
        </Box>
    );
}