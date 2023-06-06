import {
    Box
} from "@mui/material";
import IncentiveKhas from "./incentive_khas";
import ApplyIncentive from "./apply_incentive";

export default function Incentive() {
    return (
        <Box sx={{ px: 5 }}>
            <IncentiveKhas />
            <ApplyIncentive />
        </Box>
    );
}