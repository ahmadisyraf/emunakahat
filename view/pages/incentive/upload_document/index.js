import Paper from '@mui/material/Paper';
import { useTheme, Typography, Button, Stack } from "@mui/material";
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import * as React from 'react';
import { useRouter } from 'next/router';

{/*UPLOAD DOCUMENT*/}
const UploadDocument = () => {


  const theme = useTheme();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const updatedSelectedFiles = Array.from(files);
    setSelectedFiles(updatedSelectedFiles);
  };

  const handleSubmit = () => {
    // Logic for handling the form submission
    // You can access the selectedFiles state to process the uploaded files
    console.log("Submitted files:", selectedFiles);
  };

    const router = useRouter();
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      router.push('/incentive/apply_incentive'); // Navigate to the "Apply incentive" page
    };

  return (
    <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary }}>
      <Typography variant='h5'>MUAT NAIK DOKUMEN</Typography>

      <div>
        <Typography variant="body1">Slip Gaji format (.PDF)</Typography>
        <input type="file" onChange={handleFileChange} />
      </div>

      <div>
        <Typography variant="body1">Borang Pengesahan Permastautinan Negeri Pahang (.PDF)</Typography>
        <input type="file" onChange={handleFileChange} />
      </div>

      <div>
        <Typography variant="body1">Salinan Kad Pengenalan (.PDF)</Typography>
        <input type="file" onChange={handleFileChange} />
      </div>

      <div>
        <Typography variant="body1">Salinan Catatan Akad Nikah (.PDF)</Typography>
        <input type="file" onChange={handleFileChange} />
      </div>

      <div>
        <Typography variant="body1">Salinan Penyata Akaun Bank (.PDF)</Typography>
        <input type="file" onChange={handleFileChange} />
      </div>

      {/* Submit button */}
      <div>
        <Stack sx={{ justifyContent: 'center', width: "fit-content", mt: 2 }}>
          <Button variant="contained" onClick={handleClickOpen}>Hantar</Button>
        </Stack>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-describedby="alert-dialog-description"
        >
        
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Dokumen berjaya dihantar.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} autoFocus>
              Seterusnya
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      
    </Paper>
  );
}

export default UploadDocument;
