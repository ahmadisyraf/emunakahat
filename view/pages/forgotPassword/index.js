import {
    Button,
    TextField,
    Box,
    Typography,
    Link
} from "@mui/material";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                E-Munakahat
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const forgotPassword = ({ setShowRegister }) => {

    const handleShowRegister = () => {
        setShowRegister(true);
    }

    return (
        <Box
            sx={{
                width: "100%",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar> */}
            <Typography component="h1" variant="h5">
                Sign in to E-Munakahat
            </Typography>
            <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
            <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Identification"
                    label="Identification Card Number"
                    name="Identification"
                    autoComplete="Identification"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Send password
                </Button>
                <Copyright sx={{ mt: 5 }} />
            </Box>
        </Box>
    );
}

export default forgotPassword;