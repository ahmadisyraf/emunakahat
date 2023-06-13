import Paper from '@mui/material/Paper';
import { Typography, Stack, useTheme } from "@mui/material";

//ADMIN VIEW APPLICANT INFO
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
          <Typography variant="subtitle1">AHMAD ISYRAF BIN MOHD FAISHAL-ADZHA</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">No. Kad Pengenalan:</Typography>
          <Typography variant="subtitle1">010728060073</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">No. Telefon:</Typography>
          <Typography variant="subtitle1">+60 16 924 7176</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">No. Akaun Bank:</Typography>
          <Typography variant="subtitle1">06091021501342</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Nama Bank:</Typography>
          <Typography variant="subtitle1">Bank Islam Malaysia Berhad</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Tempat Lahir:</Typography>
          <Typography variant="subtitle1">Hospital Tengku Ampuan Afzan</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Umur:</Typography>
          <Typography variant="subtitle1">22</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Kewarganegaraan:</Typography>
          <Typography variant="subtitle1">Warganegara</Typography>
        </Stack> 

        <Typography variant="h6" sx={{ mb: 2 }}>
          MAKLUMAT PASANGAN
        </Typography>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Nama:</Typography>
          <Typography variant="subtitle1">NURUL ADRIANA BINTI MOHAMMAD AFANDI</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">No. Kad Pengenalan:</Typography>
          <Typography variant="subtitle1">010626030914</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">No. Kad Pengenalan:</Typography>
          <Typography variant="subtitle1">010626030914</Typography>
        </Stack>

      </div>


    </Paper>
  );
};

export default ApplicantInfo;
