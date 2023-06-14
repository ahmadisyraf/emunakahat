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
import MaklumatPerkahwinan from "./maklumat_pekerjaan";
import { getUserByIC } from "../../api/user";
import { useSelector } from "react-redux";


//breadcrumbs
function Bread() {
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="inherit" href="/incentive/incentive_khas">
                Semak Kelayakan
            </Link>
            <Link underline="hover" color="inherit" href="/incentive/upload_document">
                Muat Naik Dokumen
            </Link>
            <Link underline="hover" color="text.primary" href="/incentive/apply_incentive">
                Permohonan Insentif
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

const Incentive = () => {
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
                <Typography variant='h4'>Permohonan Incentive Khas Pasangan</Typography>
                <Box sx={{ width: '100%', mt: 5 }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Maklumat Pemohon" {...a11yProps(0)} />
                            <Tab label="Maklumat Pasangan" {...a11yProps(1)} />
                            <Tab label="Maklumat Pekerjaan dan waris" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    {/*TAB MAKLUMAT PEMOHON */}
                    <TabPanel value={value} index={0}>
                        <MaklumatPemohon />
                    </TabPanel>
                    {/*TAB MAKLUMAT PASANGAN */}
                    <TabPanel value={value} index={1}>
                        <MaklumatPasangan />
                    </TabPanel>
                    {/*TAB MAKLUMAT PEKERJAAN */}
                    <TabPanel value={value} index={2}>
                        <MaklumatPerkahwinan />
                    </TabPanel>
                </Box>
            </Paper>
        </Box>
    );
}

export default Incentive;