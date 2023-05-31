import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from '../SideBar';
import { useRouter } from "next/router";

const NavBar = () => {

    const router = useRouter();
    const pathname = router.pathname;

    console.log(pathname);

    return (
        <Box>
            <AppBar position="fixed" sx={{ zIndex: 2000 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        E-munakahat
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
            {pathname == "/" ? null : <SideBar />}
        </Box>
    );
}

export default NavBar;