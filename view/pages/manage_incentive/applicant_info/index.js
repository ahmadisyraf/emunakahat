import Paper from '@mui/material/Paper';
import { Typography, Stack, useTheme, Button } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

//ADMIN VIEW APPLICANT INFO
const ApplicantInfo = () => {
  const theme = useTheme();

  // Define breadcrumb links and their corresponding routes
  const breadcrumbLinks = [
    { label: 'Senarai permohonan', href: '/manage_incentive/incentive_listing' },
    { label: 'Maklumat pemohon', href: '/manage_incentive/applicant_info' }
  ];

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
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        {breadcrumbLinks.map((link, index) => {
          const isLast = index === breadcrumbLinks.length - 1;
          return isLast ? (
            <Typography key={index} color="text.primary">
              {link.label}
            </Typography>
          ) : (
            <Link key={index} color="inherit" href={link.href}>
              {link.label}
            </Link>
          );
        })}
      </Breadcrumbs>
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
          <Typography variant="subtitle1">Alamat:</Typography>
          <Typography variant="subtitle1">NO 15 LORONG IM2/70 BANDAR INDERA MAHKOTA 25200	</Typography>
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
          <Typography variant="subtitle1">Tarikh Lahir:</Typography>
          <Typography variant="subtitle1">28/07/2001</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Umur:</Typography>
          <Typography variant="subtitle1">22</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Kewarganegaraan:</Typography>
          <Typography variant="subtitle1">Warganegara</Typography>
        </Stack> 

        <Typography variant="h6" sx={{ mb: 2, mt:2 }}>
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
          <Typography variant="subtitle1">No. Telefon:</Typography>
          <Typography variant="subtitle1">+60 19 970 7071</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Alamat:</Typography>
          <Typography variant="subtitle1">LOT 1234 KOTA BHARU KELANTAN</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Tarikh Lahir:</Typography>
          <Typography variant="subtitle1">26/06/2001</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Tempat Lahir:</Typography>
          <Typography variant="subtitle1">HOSPITAL BESAR KOTA BHARU</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Kewarganegaraan:</Typography>
          <Typography variant="subtitle1">Warganegara</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Umur:</Typography>
          <Typography variant="subtitle1">22</Typography>
        </Stack>

        <Typography variant="h6" sx={{ mb: 2 , mt:2}}>
          MAKLUMAT WARIS
        </Typography>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Nama Waris:</Typography>
          <Typography variant="subtitle1">Kamarul Bin Ariffin</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Hubungan:</Typography>
          <Typography variant="subtitle1">Bapa</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Pekerjaan:</Typography>
          <Typography variant="subtitle1">Guru</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Jenis Pekerjaan:</Typography>
          <Typography variant="subtitle1">Kerajaan</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Pendapatan:</Typography>
          <Typography variant="subtitle1">2500.00</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">No. Telefon:</Typography>
          <Typography variant="subtitle1">01115708412</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Nama Majikan:</Typography>
          <Typography variant="subtitle1">En. Zamani Bin Ahmad</Typography>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="subtitle1">Alamat Majikan:</Typography>
          <Typography variant="subtitle1">SMK Paya Besar, Kuantan</Typography>
        </Stack>

            <Button variant="contained" >
              Terima
            </Button>
            <Button variant="contained" >
              Tolak
            </Button>
      </div>


    </Paper>
  );
};

export default ApplicantInfo;
