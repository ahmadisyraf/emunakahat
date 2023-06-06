import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Grid, Typography, TextField, MenuItem, Button } from "@mui/material";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';

const ApplyIncentive = ({initialValue, initialNationality, initialJobType}) => {
  const [value, setValue] = React.useState(initialValue);
  const [nationality, setNationality] = React.useState(initialNationality);
  const [jobtype, setJobtype] = React.useState(initialJobType);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const handleJobtypeChange = (event) => {
    setJobtype(event.target.value);
  };

  const TabPanel = ({ value, index, children }) => {
    return (
      <div role="tabpanel" hidden={value !== index}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
            {index === 2 && (
              <Button
                style={{
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  width: "200px",
                  height: "40px",
                }}
                type="submit"
                variant="contained"
              >
                Seterusnya
              </Button>
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
        textColor="primary" //set text color to blue
        indicatorColor="primary" //set text color to blue
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
