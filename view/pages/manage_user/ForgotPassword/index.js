import {
    Button,
    TextField,
    Box,
    Typography,
    Link,
} from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../components/firebase/firebase";
import { useState } from "react";

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

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleShowForgotPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                setSuccessMessage(
                    "A password reset email has been sent to your email address.");
                setShowForgotPassword(false);
            })
            .catch((error) => {
                const errormessage = err.code.replace(/[-/]/g, " ");
                setError("Error : " + errormessage.substr(errormessage.indexOf(" ") + 1));
            });


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
                    value={email}
                    onChange={handleEmailChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleShowForgotPassword}
                >
                    Send password
                </Button>
                {error && <Typography variant="body2" color="error">{error}</Typography>}
                <Button onClick={() => setShowForgotPassword(false)} sx={{ textTransform: "none" }} fullWidth>
                    Already have an account? Sign In
                </Button>
                <Copyright sx={{ mt: 5 }} />
            </Box>
        </Box>
    );
};


export default ForgotPassword;