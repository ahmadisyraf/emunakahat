import {
    Box,
    Paper,
    Typography,
    Breadcrumbs,
    Link
} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getMarriageRequest } from "../../api/marriage_request";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react"

function Bread() {
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="inherit" href="/mohon_berkahwin">
                Mohon Berkahwin
            </Link>
            <Link underline="hover" color="text.primary" href="/mohon_berkahwin/semakkan_permohonan">
                Semakkan Permohonan Kahwin
            </Link>
        </Breadcrumbs>
    );
}

const SemakkanPermohonan = () => {

    const ic = useSelector((state) => state.user.ic);
    const [data, setData] = useState([]);

    async function getData() {
        try {
            const result = await getMarriageRequest({ ic });

            if (result) {
                setData(result);
                console.log(result);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, [ic])

    return (
        <Box sx={{ px: 5 }}>
            <Paper sx={{ mt: 10, px: 3, py: 3 }}>
                <Bread />
                <Typography variant='h4'>Semakkan Permohonan Kahwin</Typography>
                <TableContainer sx={{ mt: 2 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Venue</TableCell>
                                <TableCell align="right">Jurunikah</TableCell>
                                <TableCell align="right">Nama wali</TableCell>
                                <TableCell align="right">No. Siri Permohonan</TableCell>
                                <TableCell align="right">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow
                                    // key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{row.MR_MARRIAGE_VENUE}</TableCell>
                                    <TableCell align="right">{row.MR_JURUNIKAH_NAME}</TableCell>
                                    <TableCell align="right">{row.MR_WALI_NAME}</TableCell>
                                    <TableCell align="right">{row._id}</TableCell>
                                    <TableCell align="right">
                                        {row.MR_STATUS}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default SemakkanPermohonan;