import {
    Box,
} from "@mui/material";
import UserProfile from "./userProfile";
import StaffProfile from "./staffProfile";

export default function Profile() {

    return (
        <Box sx={{ px: 5}}>
            <UserProfile/>
            {/* <StaffProfile /> */}

        </Box>
    );
}
