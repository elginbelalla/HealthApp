import DoctorNavbar from "../../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../../components/NavBar/DoctorAppBar";
import Paper from '@mui/material/Paper';
import Chats from "../../../components/Chats/chat";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


export default function DoctorMessages (){
  return(
    <>
    <DoctorAppBar/>
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar/>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     
       <Grid container spacing={2}>
       <Stack direction={"row"} spacing={3}>
        <Grid item xs={5}>
           <Chats/>
        </Grid>

        <Grid item xs={7}>
           
        </Grid>
        </Stack>
       </Grid>
      
      </Box>
    </Box>
    </>
  )
};

