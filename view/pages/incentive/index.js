import {
    Box
} from "@mui/material";
import UploadDocument from "./upload_document";
import ApplyIncentive from "./apply_incentive";

export default function Incentive() {
    return (
        <Box>
            <UploadDocument />
            <ApplyIncentive />
        </Box>
    );
}