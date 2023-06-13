import {
    Box,
} from "@mui/material";
import registerStaff from "../staffRegistration/registerStaff";

export default function staffRegistration() {
    const [showRegister, setShowRegister] = useState(false);
    const [error, setError] = useState();
    const [info, setInfo] = useState();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('md'));


    return (
        
        <Box sx={{ px: 5}}>
              {showRegister ?
            <registerStaff 
            setShowRegister={setShowRegister}
            info={info}
            setInfo={setInfo}
            error={error}
            setError={setError}

            />
            :
             <Login
            setShowRegister={setShowRegister}
            info={info}
            setInfo={setInfo}
            error={error}
            setError={setError}
             />}
        </Box>
    );
}