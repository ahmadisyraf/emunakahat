import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

const ApplyIncentive = () => {
  const theme = useTheme();

  return (
    <Paper sx={{ mt: 10, px: 5, py: 5, backgroundColor: theme.palette.primary }}>
      {/* Add your content here */}
    </Paper>
  );
}

export default ApplyIncentive;
