import DoctorNavbar from "../../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../../components/NavBar/DoctorAppBar";
import Paper from '@mui/material/Paper';
import Calendar from "../../../components/Calendar/Calendar";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

export default function DoctorAppointments (){
  return(
    <>
    <DoctorAppBar/>
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Paper className="body-container">
        <Grid container spacing={2}>
         <Stack direction={'column'}>
          <Grid item xs={8}>
           <div>Working Hours</div>
          </Grid>
          <Grid item xs={12}>
            <Calendar/>
          </Grid>
          </Stack>
          </Grid>
         </Paper>
      </Box>
    </Box>
    </>
  )
};

