import '../styles/globals.css';
import { Box, ThemeProvider, useTheme } from "@mui/material";
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: "lightgrey", height: "100vh",  background: "linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.60)), url(indek.png) no-repeat", backgroundSize: 'cover', backgroundPosition: "center",}}>
      <Layout>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </Box>
  )
}

export default MyApp
