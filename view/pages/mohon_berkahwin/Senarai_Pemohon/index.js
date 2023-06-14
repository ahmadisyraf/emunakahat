import {
    Box,
    Paper,
    Typography,
    Breadcrumbs,
    Link,
    IconButton,
    Stack
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
import { getAllMarriageRequest } from "../../api/marriage_request";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import DeleteIcon from '@mui/icons-material/Delete';

function Bread() {
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="text.primary" href="/mohon_berkahwin/semakkan_permohonan">
                Semakkan Permohonan Kahwin
            </Link>
        </Breadcrumbs>
    );
}

const SenaraiPermohonan = () => {

    const ic = useSelector((state) => state.user.ic);
    const [data, setData] = useState([]);

    async function getData() {
        try {
            const result = await getAllMarriageRequest();

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
                                {/* <TableCell>Name</TableCell> */}
                                <TableCell>No. Kad Pengenalan</TableCell>
                                <TableCell align="right">No. Siri Permohonan</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow
                                    // key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{row.USER_IC}</TableCell>
                                    <TableCell align="right">{row._id}</TableCell>
                                    <TableCell align="right">{row.MR_STATUS}</TableCell>
                                    <TableCell align="right">
                                        <Stack direction={"row"} spacing={1}>
                                            <IconButton>
                                                <DangerousIcon />
                                            </IconButton>
                                            <IconButton>
                                                <CheckCircleIcon />
                                            </IconButton>
                                            <IconButton>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Stack>
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

export default SenaraiPermohonan;