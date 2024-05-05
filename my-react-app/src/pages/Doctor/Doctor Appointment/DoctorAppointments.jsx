import DoctorNavbar from "../../../components/NavBar/DoctorNavbar";
import React from "react";
import { useState } from 'react';
import Box from '@mui/material/Box';
import DoctorAppBar from "../../../components/NavBar/DoctorAppBar";
import TimePicker from "../../../components/TimePicker/TimePicker";
import Paper from '@mui/material/Paper';
import Calendar from "../../../components/Calendar/Calendar";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './appointment.css'

export default function DoctorAppointments (){
  const [workingHours, setWorkingHours] = useState({ startTime: null, endTime: null });

  const handleTimeChange = (startTime, endTime) => {
    setWorkingHours({ startTime, endTime });
  };


  return(
    <>
    <DoctorAppBar/>
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <Paper className="body-container">
        <Grid container spacing={2} margin={1}>       
         <Stack direction={'row'} spacing={2}>
          
          <Grid item xs={8}>
           <div className="working-hours">
             <span className="working-h-txt">Select Working Hours</span>
           <TimePicker onTimeChange={handleTimeChange}/>
           </div>
          </Grid>
          
          <Grid item xs={12}>
            <Calendar  workingHours={workingHours}/>
          </Grid>
          </Stack>
          </Grid>
         </Paper>
      </Box>
    </Box>
    </>
  )
};

