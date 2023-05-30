import '../styles/globals.css';
import { ThemeProvider, useTheme } from "@mui/material";
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const theme = useTheme();
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  )
}

export default MyApp
