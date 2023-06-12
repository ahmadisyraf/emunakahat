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

const ApplyIncentive = ({ initialValue, initialNationality, initialJobType }) => {
  const [value, setValue] = useState(0);
  const [nationality, setNationality] = React.useState(initialNationality);
  const [jobtype, setJobtype] = React.useState(initialJobType);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const handleJobtypeChange = (event) => {
    setJobtype(event.target.value);
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const TabPanel = ({ value, index, children }) => {
    return (
      <div role="tabpanel" hidden={value !== index}>
        {value === index && (
          <Box sx={{ p: 3 }}>
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
                      Dokumen berjaya dihantar.
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
    <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: 'white' }}>
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
            />
          </Grid>

          <Grid item xs={6}>
            <InputLabel id="demo-simple-select-label">Kewarganegaraan</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={nationality}
              label="Kewarganegaraan"
              onChange={handleNationalityChange}
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
            />
          </Grid>
        </Grid>
      </TabPanel>

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
            />
          </Grid>

          <Grid item xs={6}>
            <InputLabel id="demo-simple-select-label">Kewarganegaraan</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={nationality}
              label="Kewarganegaraan"
              onChange={handleNationalityChange}
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
            />
          </Grid>
        </Grid>
      </TabPanel>

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
            />
          </Grid>
        </Grid>
      </TabPanel>
    </Paper>
  );
}

export default ApplyIncentive;
