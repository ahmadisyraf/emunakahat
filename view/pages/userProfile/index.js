import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Box, useTheme, Typography, TextField, Button } from "@mui/material";
import Item from '@mui/material/InputLabel';
import { useState } from 'react';
//import { auth } from "../../../components/firebase/firebase";

const UserProfile = () => {
    const [userProfile, setuserProfile] = useState();
    // const [name, setName] = useState(initalName);
    // const [phoneNo, setPhoneNo] = useState(initialphoneNo);
    // const [email, setEmail] = useState(initialEmaill);

    // class UserProfile extends React.Component {
    //     state = {
    //         id: "",
    //         name: "",
    //         gender: "",
    //         phoneNo: "",
    //         email: ""
    //     };
    // }
    // componentDidMount() {
    //     const {auth} = this.auth;
    //     getUser(getUser.email)
    //     .then(user => {
    //         this.setState({
    //             ...user
    //         })
    //     }).catch(err=>){
    //         console.error(err)
    //         this.setState({isLoading:false})
    //     }
    // }

    // const handleChange = async(e) => {
    //    e.preventDefault;
    // };

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

export default UserProfile;