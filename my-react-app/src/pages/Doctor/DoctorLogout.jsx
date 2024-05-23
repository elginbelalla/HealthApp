import DoctorNavbar from "../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';

export default function DoctorLogout (){
  return(
    <>
    
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar/>
    <h1>Dashboard</h1>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      </Box>
    </Box>
    </>
  )
};

