import {
    Box,
} from "@mui/material";
import UserListing from "./userListing";

export default function Users() {
    const [showStaffRegister, setShowStaffRegister] = useState(false);
    const [error, setError] = useState();
    const [info, setInfo] = useState();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <Box sx={{ px: 5}}>
            <UserListing />
        </Box>
    );
}