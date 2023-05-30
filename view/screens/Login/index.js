import {
    Button,
    TextField,
    Box,
    Typography,
    Link,
    Alert
} from "@mui/material";
import { auth } from "../../components/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getUser } from "../../pages/api/user";
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

const Login = ({ setShowRegister }) => {
    const [error, setError] = useState();
    const [info, setInfo] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleShowRegister = () => {
        setShowRegister(true);
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const userEmail = userCredential.user.email;

                if (userCredential.user.emailVerified) {
                    async function getUserFromDB() {
                        const user = await getUser({ email });
                        console.log(user);
                    }

                    getUserFromDB();
                } else {
                    setInfo("Email not verify please check inbox");
                }

            })
            .catch((err) => {
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
            }}
        >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar> */}
            <Typography component="h1" variant="h5">
                Sign in to E-Munakahat
            </Typography>

            <Box sx={{ mt: 1 }}>
                {info && <Alert severity="info">{info}</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
                    <Button sx={{ textTransform: "none" }}>
                        Forgot password?
                    </Button>
                </Box>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleLogin}
                >
                    Sign In
                </Button>
                <Button sx={{ textTransform: "none", width: "100%" }} onClick={handleShowRegister}>
                    Don't have an account?  Sign Up
                </Button>
                <Copyright sx={{ mt: 5 }} />
            </Box>
        </Box>
    );
}

export default Login;