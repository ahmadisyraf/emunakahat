import Paper from '@mui/material/Paper';
import { useTheme, Typography, Button } from "@mui/material";
import { useState } from 'react';

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

  return (
    <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary }}>
      <Typography variant='h4'>Muat Naik Dokumen</Typography>

      {/* File upload elements */}
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
        <Button variant="contained" onClick={handleSubmit}>Hantar</Button>
      </div>
      
    </Paper>
  );
}

export default UploadDocument;
