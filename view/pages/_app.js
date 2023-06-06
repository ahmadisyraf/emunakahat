import '../styles/globals.css';
import { Box, ThemeProvider, useTheme } from "@mui/material";
import Layout from '../components/Layout';
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const theme = useTheme();
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <Box sx={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
      <Layout>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </Box>
  )
}

export default MyApp
