import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Grid, Typography, TextField } from "@mui/material";
import { useState } from 'react';

const ApplyIncentive = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = ({ value, index, children }) => {
    return (
      <div role="tabpanel" hidden={value !== index}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
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
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        textColor="secondary"
        indicatorColor="secondary"
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
          <Grid item xs={3}>
            <Typography variant="body1"><b>Nama* :</b></Typography>
          </Grid>
          <Grid item xs={7}>
            <TextField
              style={{ width: '450px' }}
              id="filled-hidden-label-small"
              defaultValue=""
              size="small"
            />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        Maklumat Pasangan
      </TabPanel>

      <TabPanel value={value} index={2}>
        Maklumat Pekerjaan dan Waris
      </TabPanel>
      
    </Paper>
  );
}

export default ApplyIncentive;
