import Paper from '@mui/material/Paper';
import { Typography, Stack, useTheme } from "@mui/material";

const ApplicantInfo = () => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        mt: 10,
        px: 5,
        py: 5,
        backgroundColor: theme.palette.primary,
        mx: 5,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        MAKLUMAT PERMOHONAN
      </Typography>
      <div>
        <Typography variant="h6" sx={{ mb: 2 }}>
          MAKLUMAT PEMOHON
        </Typography>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Nama:</Typography>
          <Typography variant="subtitle1">Ali Bin Abu</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">No. Kad Pengenalan:</Typography>
          <Typography variant="subtitle1">010322063013</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">No. Telefon:</Typography>
          <Typography variant="subtitle1">0167435022</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">No. Akaun Bank:</Typography>
          <Typography variant="subtitle1">06091021501342</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Nama Bank:</Typography>
          <Typography variant="subtitle1">Bank Islam Malaysia Berhad</Typography>
        </Stack>

        
      </div>
    </Paper>
  );
};

export default ApplicantInfo;
