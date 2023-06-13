import '../styles/globals.css';
import { Box, ThemeProvider, useTheme } from "@mui/material";
import Layout from '../components/Layout';
import { useRouter } from "next/router";
import { Provider } from 'react-redux';
import { store, persistor } from "../state/store";
import { PersistGate } from 'redux-persist/integration/react';


function MyApp({ Component, pageProps }) {
  const theme = useTheme();
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <Box sx={{ backgroundColor: "#f2f2f2", height: "100vh" }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </Layout>
        </PersistGate>
      </Provider>
    </Box>
  );
}

export default MyApp
