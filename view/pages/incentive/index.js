import {
    Box
} from "@mui/material";
import IncentiveStatus from "./incentive_status";
import ApplyIncentive from "./apply_incentive";

export default function Incentive() {
    return (
        <Box>
            <IncentiveStatus />
            <ApplyIncentive />
        </Box>
    );
}