import {
    Box,
} from "@mui/material";
import UserProfile from "./userProfile";
import StaffProfile from "./staffProfile";
import Cookies from "js-cookie";

export default function Profile() {

    const cookie = Cookies.get("user_data") ? Cookies.get("user_data") : null;

    return (
        <Box sx={{ px: 5}}>
            <UserProfile cookie={cookie} />
            {/* <StaffProfile /> */}

        </Box>
    );
}
