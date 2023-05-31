import { Box } from '@mui/material';
import Navbar from '../NavBar';
import SideBar from '../SideBar';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <Box sx={{ display: "flex"}}>
            <Navbar />
            {pathname == "/" ? null : <SideBar />}
            <Box component="main" sx={{ flexGrow: 1, p:3 }}>{children}</Box>
        </Box>
    );
}

export default Layout;