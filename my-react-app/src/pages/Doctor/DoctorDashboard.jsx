import DoctorNavbar from "../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../components/NavBar/DoctorAppBar";

export default function DoctorDashboard (){
  return(
    <>
    <DoctorAppBar/>
    <Box sx={{ display: 'flex' }} bgcolor='Background'>
    <DoctorNavbar/>
    <h1>Dashboard</h1>
    </Box>
    </>
  )
};

