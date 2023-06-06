import {
    Button,
    TextField,
    Box,
    Typography,
    Link,
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

// This is forgot password class under manage user package? ENTAH LAH
const ForgotPassword = ({ setShowForgotPassword }) => {

    const handleShowForgotPassword = () => {
        setShowForgotPassword(false);
    }

    return (
        <Box
            sx={{
                width: "100%",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                px: 13
            }}
        >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar> */}
            <Typography component="h1" variant="h5">
                Forgot Password
            </Typography>
            <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
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
                <Button onClick={handleShowForgotPassword} sx={{ textTransform: "none"}} fullWidth>
                    Already have an account? Sign In
                </Button>
                <Copyright sx={{ mt: 5 }} />
            </Box>
        </Box>
    );
}

export default ForgotPassword;