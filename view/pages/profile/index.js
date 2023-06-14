import {
    Box,
} from "@mui/material";
import UserProfile from "./userProfile";
import StaffProfile from "./staffProfile";
import { useSelector } from "react-redux";

export default function Profile() {
    const role = useSelector((state) => state.user.role);

    return (
        <Box sx={{ px: 5 }}>
            {role === "user" ? <UserProfile /> : <StaffProfile />}
        </Box>
    );
}
