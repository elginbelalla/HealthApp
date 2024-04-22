import DoctorNavbar from "../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../components/NavBar/DoctorAppBar";


export default function DoctorAppointments (){
  return(
    <>
    <DoctorAppBar/>
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar/>
    <h1>Appointments</h1>
    </Box>
    </>
  )
};

