import {
    Button,
    TextField,
    Box,
    Typography,
    Link,
    Alert,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from "@mui/material";
import { auth } from "../../../components/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getUser } from "../../api/user";
import { useState } from "react";
import { useRouter } from "next/router";
import ForgotPassword from "../forgotPassword";
import Cookies from "js-cookie";

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

// This is login class under manage user package
const Login = ({ setShowRegister, setShowforgotPassword, info, setInfo, error, setError }) => {

    const router = useRouter();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showForgotPassowrd, setShowForgotPassword] = useState();

    const handleShowRegister = () => {
        setShowRegister(true);
        setError("");
        setInfo("");
    }

    //HAHAHA IDK MAN
    const handleShowForgotPassword = () => {
        setShowForgotPassword(true);
        setError("");
        setInfo("");
    }

    const handleLogin = () => {
        setError("");
        setInfo("");
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                if (userCredential.user.emailVerified) {
                    async function getUserFromDB() {
                        const user = await getUser({ email });
                        console.log(user);

                        const user_data = {
                            ic: user.user.USER_IC,
                            name: user.user.USER_NAME,
                            gender: user.user.USER_GENDER,
                            phone: user.user.USER_PHONE_NO,
                            email: user.user.USER_EMAIL,
                            birth_date: user.user.USER_BIRTH_DATE? user.user.USER_BIRTH_DATE : null ,
                            race: user.user.USER_RACE? user.user.USER_RACE : null,
                            address: user.user.USER_ADDRESS? user.user.USER_ADDRESS : null,
                            educational_status: user.user.USER_EDUCATIONAL_STATUS? user.user.USER_EDUCATIONAL_STATUS : null,
                            employment_position: user.user.USER_EMPLOYMENT_POSITION? user.user.USER_EMPLOYMENT_POSITION : null,
                            salary: user.user.USER_SALARY? user.user.USER_SALARY : null,
                            marriage_status: user.user.USER_MARRIAGE_STATUS? user.user.USER_MARRIAGE_STATUS : null,
                            partner_ic: user.user.USER_PARTNER_IC? user.user.USER_PARTNER_IC : null,
                            login: true,
                        }

                        if (user) {
                            Cookies.set("user_data", JSON.stringify(user_data));
                        } else {
                            console.log("Error to save in cookies");
                        }
                    }

                    getUserFromDB();
                    router.push("/profile");
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
        <Box>
            {showForgotPassowrd ?
                <ForgotPassword setShowForgotPassword={setShowForgotPassword}/>
                :
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
                    <Box sx={{ mt: 1 }}>
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

                        <FormControl fullWidth margin='normal'>
                            <InputLabel id="demo-simple-select-label">Pengguna*</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem value={"Male"}>Staff/Admin</MenuItem>
                                <MenuItem value={"Female"}>Applicant</MenuItem>
                            </Select>
                        </FormControl>

                        <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
                            <Button sx={{ textTransform: "none" }} onClick={handleShowForgotPassword}>
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
            }
        </Box>
    );
}

export default Login;