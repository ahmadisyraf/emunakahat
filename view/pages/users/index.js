import {
    Box,
} from "@mui/material";
import UserListing from "./userListing";

export default function Users() {
    return (
        <Box sx={{ px: 5}}>
            <UserListing />
        </Box>
    );
}