import {
    Button,
    TextField,
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
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

const Login = ({ setShowRegister }) => {

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
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
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
                />

                    <FormControl fullWidth margin='normal'>
                    <InputLabel id="demo-simple-select-label">Pengguna*</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        <MenuItem value={""}>None</MenuItem>
                        <MenuItem value={"Male"}>Staff</MenuItem>
                        <MenuItem value={"Female"}>Applicant</MenuItem>
                    </Select>
                </FormControl>

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