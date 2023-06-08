import Paper from '@mui/material/Paper';
import {useTheme, Typography} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(bil, name, slip, tarikh, status) {
    return { bil, name, slip, tarikh, status };
  }
  
  const statusRows = [
    createData(1, "Ali Bin Abu", "M3/2022 000001", "23-10-2-22", "Diterima"),
  ];
  

{/*INCENTIVE STATUS*/}
const IncentiveStatus = () => {

    const theme = useTheme();

    return(
        <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary }}>
            <Typography variant='h5'>STATUS PERMOHONAN</Typography>

            <TableContainer sx={{ mt: 5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Bil.</TableCell>
                            <TableCell>KP / Nama</TableCell>
                            <TableCell align="right">No. Slip Permohonan</TableCell>
                            <TableCell align="right">Tarikh Hantar</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Operasi</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {statusRows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="left">{row.bil}</TableCell>
                            <TableCell component="th" scope="row" sx={{ whiteSpace: 'pre-wrap' }}>
                            {row.name}
                            </TableCell>
                            <TableCell align="right">{row.slip}</TableCell>
                            <TableCell align="right">{row.tarikh}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    )

}
export default IncentiveStatus;