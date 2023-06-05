import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Box, useTheme, Typography, TextField, Button } from "@mui/material";
import Item from '@mui/material/InputLabel';
import { useState } from 'react';
//import { auth } from "../../../components/firebase/firebase";

const staffProfile = () => {
    const [staffProfile, setstaffProfile] = useState();

    const theme = useTheme();

    return (

        <Paper sx={{ mt: 10, px: 7, py: 5, backgroundColor: theme.palette.primary }}>
            <Typography variant='h4'>Profil</Typography>
            
            <Grid  sx={{py:2}} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
                <Item><b>No. Kad Pengenalan :</b></Item>
            </Grid>
            <Grid item xs={7}>
                <Item><Box>
                <TextField style={{ width: '450px' }}
                disabled
                id="filled-hidden-label-small"
                defaultValue=""
                size="small"
                />
                </Box></Item>
            </Grid>
            <Grid item xs={3}>
                <Item><b>Nama* :</b></Item>
            </Grid>
            <Grid item xs={7}>
                <Item><Box>
                <TextField style={{ width: '450px' }}
                id="filled-hidden-label-small"
                defaultValue=""
                size="small"
                />
                </Box></Item>
            </Grid>
            <Grid item xs={3}>
                <Item><b>Jantina :</b></Item>
            </Grid>
            <Grid item xs={7}>
                <Item><Box>
                <TextField style={{ width: '450px' }}
                disabled
                id="filled-hidden-label-small"
                defaultValue=""
                size="small"
                />
                </Box></Item>
            </Grid>
            <Grid item xs={3}>
                <Item><b>No Telefon* :</b></Item>
            </Grid>
            <Grid item xs={7}>
                <Item><Box>
                <TextField style={{ width: '450px' }}
                id="filled-hidden-label-small"
                defaultValue=""
                size="small"
                />
                </Box></Item>
            </Grid>
            <Grid item xs={3}>
                <Item><b>Email* :</b></Item>
            </Grid>
            <Grid item xs={7}>
                <Item><Box>
                <TextField style={{ width: '450px' }}
                id="filled-hidden-label-small"
                defaultValue=""
                size="small"
                />
                </Box></Item>
            </Grid>
            </Grid>

            <Button style={{width: "300px", height: "40px",}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 1 }}>
                    Kemaskini
                </Button>
        </Paper>
    );
}  

export default staffProfile;