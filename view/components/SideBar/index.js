import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ApprovalIcon from '@mui/icons-material/Approval';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LogoutIcon from '@mui/icons-material/Logout';
import Face6Icon from '@mui/icons-material/Face6';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../state/action';

const drawerWidth = 280;

const SideBar = () => {

    const router = useRouter();
    const role = useSelector((state) => state.user.role);
    const dispatch = useDispatch();


    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                zIndex: 500,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    <ListItem key={"Profil"} disablePadding>
                        <ListItemButton onClick={() => router.push("/profile")}>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Profil"} />
                        </ListItemButton>
                    </ListItem>
                    {role === "user" ?
                        null
                        :
                        <ListItem key={"Senarai Pengguna"} disablePadding>
                            <ListItemButton onClick={() => router.push("/users/userListing")}>
                                <ListItemIcon>
                                    <Face6Icon />
                                </ListItemIcon>
                                <ListItemText primary={"Senarai Pengguna"} />
                            </ListItemButton>
                        </ListItem>
                    }
                    <ListItem key={"Khursus Pra-Perkahwinan"} disablePadding>
                        <ListItemButton onClick={() => router.push(role === "user" ? "/kursus_perkahwinan" : "/kursus_perkahwinan/maklumat_kursus")}>
                            <ListItemIcon>
                                <ImportContactsIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Kursus Pra-Perkahwinan"} />
                        </ListItemButton>
                    </ListItem>
                    {role === "user" ?
                        null
                        :
                        <ListItem key={"Senarai Peserta"} disablePadding>
                            <ListItemButton onClick={() => router.push("/kursus_perkahwinan/senarai_peserta")}>
                                <ListItemIcon>
                                    <Face6Icon />
                                </ListItemIcon>
                                <ListItemText primary={"Senarai Peserta Kursus"} />
                            </ListItemButton>
                        </ListItem>
                    }
                    <ListItem key={"Permohonan Berkahwin"} disablePadding>
                        <ListItemButton onClick={() => router.push("/mohon_berkahwin")}>
                            <ListItemIcon>
                                <ApprovalIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Permohonan Berkahwin"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Pendaftaran Perkahwinan"} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HowToRegIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Pendaftaran Perkahwinan"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Khidmat Nasihat"} disablePadding>
                        <ListItemButton onClick={() => router.push("/marriage_consultation")}>
                            <ListItemIcon>
                                <HeadsetMicIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Khidmat Nasihat"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Incetive Khas Pasangan Pengantin"} disablePadding>
                        <ListItemButton onClick={() => router.push("/incentive")}>
                            <ListItemIcon>
                                <VolunteerActivismIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Incentive Khas Pasangan Pengantin"} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem key={"Log Keluar"} disablePadding>
                        <ListItemButton onClick={
                            () => {
                                router.push("/");
                                dispatch(setUser({}));

                            }
                        }>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Log Keluar"} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
            </Box>
        </Drawer>
    );
}

export default SideBar;