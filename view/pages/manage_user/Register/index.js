import {
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Alert,
    useMediaQuery,
    useTheme,
} from "@mui/material"
import { MuiTelInput } from 'mui-tel-input'
import { useState, useRef, useEffect } from "react";
import { auth } from "../../../components/firebase/firebase";
import { registerUser } from "../../api/user";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";


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

// This is register class under manage user package
const Register = ({ setShowRegister, info, setInfo, error, setError }) => {

    const [ic, setIc] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [repassword, setRepassword] = useState();
    const [gender, setGender] = useState('');

    // const [valid, setValid] = useState();
    // const [error, setError] = useState();
    const [phoneNo, setPhoneNo] = useState('')

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const handlePhoneChange = (newValue) => {
        setPhoneNo(newValue)
    }

    const handleShowLogin = () => {
        setShowRegister(false);
    }


    const data = {
        USER_IC: ic,
        USER_NAME: name,
        USER_GENDER: gender,
        USER_PHONE_NO: phoneNo,
        USER_EMAIL: email,
    }

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                sendEmailVerification(user)
                    .then(() => {
                        setInfo("Verification link already sent to your email");
                    });

                async function insertData() {
                    if (user) {
                        const result = await registerUser({ data });
                        console.log(result);
                        console.log("Succes to db");
                    } else {
                        console.log("error to db");
                    }
                }

                insertData();
            })
            .catch((err) => {
                const errormessage = err.code.replace(/[-/]/g, " ");
                setError("Error : " + errormessage.substr(errormessage.indexOf(" ") + 1));
            });

            setShowRegister(false);
    }

    return (
        <Box
            sx={{
                width: "100%",
                mt: 8,
                px: mobile ? 1 : 13,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxHeight: 650,
                overflow: mobile ? "none" : "scroll"
            }}
        >
            <Box sx={{ mt: 3 }}>
                {/* {valid && <Alert severity="success">{valid}</Alert>}
                {error && <Alert severity="error">{error}</Alert>} */}
                <TextField
                    fullWidth
                    margin='normal'
                    id="Identification"
                    label="Identification Card Number"
                    name="Identification"
                    autoComplete="Identification"
                    onChange={(e) => setIc(e.target.value)}
                />
                <TextField

                    fullWidth
                    id="Name"
                    label="Name"
                    name="Name"
                    autoComplete="Name"
                    margin="normal"
                    onChange={(e) => setName(e.target.value)}
                />

                <FormControl fullWidth margin='normal'>
                    <InputLabel id="demo-simple-select-label">Gender*</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={""}>None</MenuItem>
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                    </Select>
                </FormControl>
                <MuiTelInput value={phoneNo} onChange={handlePhoneChange} margin="normal" fullWidth label="Phone No" defaultCountry="MY" sx={{ mt: 1 }}
                />
                <TextField

                    fullWidth
                    margin="normal"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField

                    fullWidth
                    margin="normal"
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField

                    fullWidth
                    margin="normal"
                    name="re-enter-password"
                    label="Re-enter password"
                    type="password"
                    id="re-enter-password"
                    autoComplete="new-password"
                    onChange={(e) => setRepassword(e.target.value)}

                />
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I agree all data that i enter in this system will be used in this system"
                    sx={{ my: 1 }}
                />
                <Button variant="contained" fullWidth sx={{ mt: 2 }} type='button' onClick={handleRegister}>
                    Sign Up
                </Button>

                <Button fullWidth sx={{ textTransform: "none", mt: 2 }} onClick={handleShowLogin}>
                    Already Have an Account? Sign In
                </Button>
                <Copyright sx={{ mt: 5, mb: 5 }} />
            </Box>
        </Box>
    );
}

export default Register;