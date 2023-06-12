import {
    Box,
    Button,
    Paper,
    Typography,
    TextField
  } from "@mui/material";
  const currencies = [
    {
      value: 'PENDAFTRAN NIKAH DENGAN KEBENARAN',
      label: 'PENDAFTRAN NIKAH DENGAN KEBENARAN',
    },
    {
      value: 'PENDAFTRAN NIKAH DENGAN KEBENARAN',
      label: 'PENDAFTRAN NIKAH DENGAN KEBENARAN',
    },
    {
      value: 'PENDAFTRAN NIKAH DENGAN KEBENARAN',
      label: 'PENDAFTRAN NIKAH DENGAN KEBENARAN',
    },
   
  ];
  const KursusCheck = () => {
    return (
        <Box sx={{ px: 5}} >
            <Paper sx={{ width: "100%", mt: 10}}>
           
      
        <h1>Pendaftaran Perkahwinan</h1>
        
       <div></div>
      
       <Button sx={{ mt: 1, px: 0, py: 4}}></Button>
      <TextField id="outlined-basic" label="NO.K/P pasangan" variant="outlined" />
      <div></div>
      
  
  <div></div>
  <Button sx={{ mt: 1, px: 0, py: 4}}></Button>
      <TextField id="outlined-basic" label="No.Akuan Teima Kebenaran Berkahwin" variant="outlined" />
      <div></div>
      <Button sx={{ mt: 10, px: 0, py: 4}}></Button>
      <TextField
          id="outlined-select-currency"
          select
          
          label=""
          defaultValue="PENDAFTRAN NIKAH DENGAN KEBENARAN"
          helperText=" Kategori Pendaftaran Nikah"
        ></TextField> 
        <div></div>
        <Button sx={{ mt: 0, px: 0, py: 4}}></Button>
     <Button variant="contained">Teruskan</Button> <Button variant="contained">Kembali</Button>
            </Paper>
            
        </Box>
        
        
    );
  }
  
  export default KursusCheck;
  