import { Grid, Typography, TextField, MenuItem, Button, Stack } from "@mui/material";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from "react";
import { useRouter } from 'next/router';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useSelector, useDispatch } from 'react-redux';

const ApplyIncentive = ({ initialNationality, initialJobType }) => {

  const [value, setValue] = useState(0);
  const [nationality, setNationality] = useState(initialNationality);
  const [jobtype, setJobtype] = useState(initialJobType);
  const [open, setOpen] = useState(false);
  const router = useRouter();


  //PEMOHON
  const IC = useSelector((state) => state.user.ic);
  const phone = useSelector((state) => state.user.phone);
  const bankAcc = useSelector((state) => state.user.BankAcc);
  const bankName = useSelector((state) => state.user.BankName);
  const birth_date = useSelector((state) => state.user.birth_date);
  const birth_place = useSelector((state) => state.user.birthPlace);
  const age = useSelector((state) => state.user.age);
  const address = useSelector((state) => state.user.address);

  const [userIC, setIc] = useState(IC);
  const [userPhoneNo, setUserPhoneNo] = useState(phone);
  const [userBankAcc, setUserBankAcc] = useState(bankAcc);
  const [userBankName, setUserBankName] = useState(bankName);
  const [userBirthDate, setUserBirthDate] = useState(birth_date);
  const [userBirthPlace, setUserBirthPlace] = useState(birth_place);
  const [userNationality, setUserNationality] = useState();
  const [userAge, setUserAge] = useState(age);
  const [userAddress, setUserAddress] = useState(address);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChangeNationality = (event) => {
    setUserNationality(event.target.value);
  };

  const handleUpdateUser = async () => {
    try {
        const updatedData = {
            USER_IC: userIC,
            USER_PHONE_NO: userPhoneNo,
            USER_BANK_ACC: userBankAcc,
            USER_BANK_NAME: userBankName,
            USER_BIRTH_DATE: userBirthDate,
            USER_BIRTH_PLACE: userBirthPlace,
            USER_NATIONALITY: userNationality,
            USER_AGE: userAge,
            USER_ADDRESS: userAddress,
        };

        const updateData = await updateUser({ ic, updatedData });
        const data = updateData.updatedData;

        if (updateData) {
            console.log('Success');
            console.log(updateData);

            const user_data = {
                ic: IC,
                phone: updatedData.USER_PHONE_NO,
                bank_acc: updatedData.USER_BANK_ACC ? updatedData.USER_BANK_ACC : null,
                bank_name: updatedData.USER_BANK_NAME ? updatedData.USER_BANK_NAME : null,
                birth_date: updatedData.USER_BIRTH_DATE ? updatedData.USER_BIRTH_DATE : null,
                birth_place: updatedData.USER_BIRTH_PLACE ? updatedData.USER_BIRTH_PLACE : null,
                address: updatedData.USER_ADDRESS ? updatedData.USER_ADDRESS : null,
                partner_ic: updatedData.USER_PARTNER_IC ? updatedData.USER_PARTNER_IC : null,
                nationality: updatedData.USER_NATIONALITY ? updatedData.USER_NATIONALITY : null,
                age: updatedData.USER_AGE ? updatedData.USER_AGE : null,
                address: updatedData.USER_ADDRESS ? updatedData.USER_ADDRESS : null,
                login: true,
            };

            dispatch(setUser(user_data));
        } else {
            console.log('Error');
        }
    } catch (error) {
        console.log('Error:', error);
  }

  //PASANGAN
    const ic = useSelector((state) => state.user.partner_ic);

    const [userIC, setPartnerIC] = useState();
    const [userAddress, setPartnerAddress] = useState();
    const [userPhoneNo, setPartnerPhoneNo] = useState();
    const [userNationality, setPartnerNationality] = useState();
    const [userBirthDate, setPartnerBirthDate] = useState();
    const [userBirthPlace, setPartnerBirthPlace] = useState();
    const [userAge, setPartnerAge] = useState();
    const [partnerExist, setPartnerExist] = useState(false);



    async function getPartner() {
      console.log("masuk");
      try {
          const partner = await getUserByIC({ ic });

          if (partner) {
              setPartnerIC(partner.USER_IC);
              setPartnerAddress(partner.USER_ADDRESS);
              setPartnerPhoneNo(partner.USER_PHONE_NO);
              setUserNationality(partner.USER_NATIONALITY);
              setPartnerBirthDate(partner.USER_BIRTH_DATE);
              setPartnerBirthPlace(partner.USER_BIRTH_PLACE);
              setPartnerAge(partner.USER_AGE);
              setPartnerExist(true);

              console.log("success");
              console.log(partner);
          } else {
              console.log("error")
              setPartnerExist(false);
          }

      } catch (err) {
          console.log(err)
          setPartnerExist(false);
      }
  }

  useEffect(() => {
      console.log("Maklumat Pasangan")
      getPartner();
  });

  //RELATIVE

  const [relativeName, setRelativeName] = useState();
  const [relativeRelationship, setRelativeRelationship] = useState();
  const [relativeOccupation, setRelativeOccupation] = useState();
  const [relativeSalary, setRelativeSalary] = useState();
  const [relativePhone, setRelativePhone] = useState();
  const [relativeEmployer, setRelativeEmployer] = useState();
  const [relativeEmployerAdd, setRelativeEmployerAdd] = useState();

  const data = {
    "USER_IC": ic,
    "PARTNER_IC": partner_ic,
    "RI_NAME": relativeName,
    "RI_RELATIONSHIP": relativeRelationship,
    "RI_OCCUPATION": relativeOccupation,
    "RI_SALARY": relativeSalary,
    "RI_PHONE": relativePhone,
    "RI_EMPLOYER_NAME": relativeEmployer,
    "RI_EMPLOYER_ADDRESS": relativeEmployerAdd,
}

  const handleJobtypeChange = (event) => {
    setJobtype(event.target.value);
  };


  
};




  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    router.push('/incentive/incentive_status'); // Navigate to the "Incentive status" page
  };

  // Define breadcrumb links and their corresponding routes
  const breadcrumbLinks = [
    { label: 'Semak Kelayakan', href: '/incentive/incentive_khas' },
    { label: 'Muat Naik Dokumen', href: '/incentive/upload_document' },
    { label: 'Permohonan Insentif', href: '/incentive/apply_incentive' },
  ];

  const TabPanel = ({ value, index, children }) => {
    return (

      <div role="tabpanel" hidden={value !== index}>
        {value === index && (
          <Box sx={{ p: 3,  mt: 5}}>
            <Typography>{children}</Typography>
            {index === 2 && (
              <div>
                <Stack sx={{ justifyContent: 'center', width: "fit-content", mt: 2 }}>
                  <Button variant="contained" onClick={handleDialogOpen}>Hantar</Button>
                </Stack>
                <Dialog
                  open={open}
                  onClose={handleDialogClose}
                  aria-describedby="alert-dialog-description"
                >
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Maklumat berjaya dihantar.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button variant="contained" onClick={handleDialogClose} autoFocus>
                      Seterusnya
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            )}
          </Box>
        )}
      </div>
    );
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  return (
    <Paper sx={{ mt: 10, px: 5, py: 5, mx:5, backgroundColor: 'white' }}>

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

      <Typography variant='h6'>PERMOHONAN INSENTIF KHAS PASANGAN PENGANTIN</Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab
          label="Maklumat Pemohon"
          {...a11yProps(0)}
        />
        <Tab
          label="Maklumat Pasangan"
          {...a11yProps(1)}
        />
        <Tab
          label="Maklumat Pekerjaan dan Waris"
          {...a11yProps(2)}
        />
      </Tabs>

      {/*PEMOHON*/}
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="Identification"
              label="No. Kad Pengenalan"
              name="Identification"
              autoComplete="Identification"
              value={userIC}
              onChange={(e) => setIc(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="telephone"
              label="No. Telefon"
              name="telephone"
              autoComplete="telephone"
              value={userPhoneNo}
              onChange={(e) => setUserPhoneNo(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="bankAcc"
              label="No. Akaun Bank"
              name="bankAcc"
              autoComplete="bankAcc"
              value={userBankAcc}
              onChange={(e) => setUserBankAcc(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="bankName"
              label="Nama Bank"
              name="bankName"
              autoComplete="bankName"
              value={userBankName}
              onChange={(e) => setUserBankName(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="birthdate"
              label="Tarikh Lahir"
              name="birthdate"
              autoComplete="birthdate"
              value={userBirthDate}
              onChange={(e) => setUserBirthDate(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="birthplace"
              label="Tempat Lahir"
              name="birthplace"
              autoComplete="birthplace"
              value={userBirthPlace}
              onChange={(e) => setUserBirthPlace(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="age"
              label="Umur"
              name="age"
              autoComplete="age"
              value={userAge}
              onChange={(e) => setUserAge(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <InputLabel id="demo-simple-select-label">Kewarganegaraan</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userNationality}
              label="Kewarganegaraan"
              onChange={handleChangeNationality}
              fullWidth
            >
              <MenuItem value="warganegara">Warganegara</MenuItem>
              <MenuItem value="bukan warganegara">Bukan Warganegara</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              margin='normal'
              id="address"
              label="Alamat semasa"
              name="address"
              autoComplete="address"
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </Grid>
        </Grid>
      </TabPanel>

      {/*PASANGAN*/}
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="Identification"
              label="No. Kad Pengenalan"
              name="Identification"
              autoComplete="Identification"
              value={userIC}
              onChange={(e) => setPartnerIC(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="telephone"
              label="No. Telefon"
              name="telephone"
              autoComplete="telephone"
              value={userPhoneNo}
              onChange={(e) => setPartnerPhoneNo(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="birthdate"
              label="Tarikh Lahir"
              name="birthdate"
              autoComplete="birthdate"
              value={userBirthDate}
              onChange={(e) => setPartnerBirthDate(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="birthplace"
              label="Tempat Lahir"
              name="birthplace"
              autoComplete="birthplace"
              value={userBirthPlace}
              onChange={(e) => setPartnerBirthPlace(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="age"
              label="Umur"
              name="age"
              autoComplete="age"
              value={userAge}
              onChange={(e) => setPartnerAge(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <InputLabel id="demo-simple-select-label">Kewarganegaraan</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userNationality}
              label="Kewarganegaraan"
              onChange={handleChangeNationality}
              fullWidth
            >
              <MenuItem value="citizen">Warganegara</MenuItem>
              <MenuItem value="noncitizen">Bukan Warganegara</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              margin='normal'
              id="address"
              label="Alamat semasa"
              name="address"
              autoComplete="address"
              value={userAddress}
              onChange={(e) => setPartnerAddress(e.target.value)}
            />
          </Grid>
        </Grid>
      </TabPanel>

        {/*WARIS*/}
      <TabPanel value={value} index={2}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="relativename"
              label="Nama Waris"
              name="relativename"
              autoComplete="relativename"
              value={relativeName}
              onChange={(e) => setRelativeName(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="relationship"
              label="Hubungan"
              name="relationship"
              autoComplete="relationship"
              value={relativeRelationship}
              onChange={(e) => setRelativeRelationship(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="occupation"
              label="Pekerjaan"
              name="occupation"
              autoComplete="occupation"
              value={relativeOccupation}
              onChange={(e) => setRelativeOccupation(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <InputLabel id="demo-simple-select-label">Jenis Pekerjaan</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={jobtype}
              label="Jenis Pekerjaan"
              onChange={handleJobtypeChange}
              fullWidth
            >
              <MenuItem value="government">Kerajaan</MenuItem>
              <MenuItem value="private">Swasta</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="salary"
              label="Pendapatan"
              name="salary"
              autoComplete="salary"
              value={relativeSalary}
              onChange={(e) => setRelativeSalary(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="telephone"
              label="No. Telefon"
              name="telephone"
              autoComplete="telephone"
              value={relativePhone}
              onChange={(e) => setRelativePhone(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="employerName"
              label="Nama Majikan"
              name="employerName"
              autoComplete="employerName"
              value={relativeEmployer}
              onChange={(e) => setRelativeEmployer(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              margin='normal'
              id="employerAddress"
              label="Alamat Majikan"
              name="employerAddress"
              autoComplete="employerAddress"
              value={relativeEmployerAdd}
              onChange={(e) => setRelativeEmployerAdd(e.target.value)}
            />
          </Grid>
        </Grid>
      </TabPanel>
    </Paper>
  );
}

export default ApplyIncentive;
