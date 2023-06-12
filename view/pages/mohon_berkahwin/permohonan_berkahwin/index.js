import {
    Box,
    Paper,
    Typography,
    Breadcrumbs,
    Link,
} from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from "react";
import MaklumatPemohon from "./maklumat_pemohon";
import MaklumatPasangan from "./maklumat_pasangan";
import MaklumatPerkahwinan from "./maklumat_perkahwinan";
import { getUserByIC } from "../../api/user";
import { useSelector } from "react-redux";

function Bread() {
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="inherit" href="/kursus_perkahwinan">
                Mohon Berkahwin
            </Link>
            <Link underline="hover" color="text.primary" href="/kursus_perkahwinan">
                Maklumat mohon perkahwinan
            </Link>
        </Breadcrumbs>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const PermohonanBerkahwin = () => {
    const [value, setValue] = useState(0);
    const [partner, setPartner] = useState();
    const partner_ic = useSelector((state) => state.user.partner_ic);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ px: 5 }}>
            <Paper sx={{ mt: 10, px: 3, py: 3 }}>
                <Bread />
                <Typography variant='h4'>Maklumat mohon perkahwinan</Typography>
                <Box sx={{ width: '100%', mt: 5 }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Maklumat Pemohon" {...a11yProps(0)} />
                            <Tab label="Maklumat Pasangan" {...a11yProps(1)} />
                            <Tab label="Maklumat Perkahwinan" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <MaklumatPemohon />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <MaklumatPasangan />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <MaklumatPerkahwinan />
                    </TabPanel>
                </Box>
            </Paper>
        </Box>
    );
}

export default PermohonanBerkahwin;