import {
    Box,
} from "@mui/material";
import staffRegistration from "../staffRegistration/registerStaff";

export default function staffRegistration() {
    const [showStaffRegister, setShowStaffRegister] = useState(false);
    const [error, setError] = useState();
    const [info, setInfo] = useState();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('md'));


    return (
        
        <Box sx={{ px: 5}}>
              {showStaffRegister ?
            <staffRegistration
            setShowStaffRegister={setShowStaffRegister}
            info={info}
            setInfo={setInfo}
            error={error}
            setError={setError}

            />
            :
             <Login
             setShowStaffRegister={setShowStaffRegister}
            info={info}
            setInfo={setInfo}
            error={error}
            setError={setError}
             />}
        </Box>
    );
}