import DoctorNavbar from "../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../components/NavBar/DoctorAppBar";

export default function DoctorTests  (){
  return(
    <>
    <DoctorAppBar/>
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar/>
    <h1>Tests</h1>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       
      </Box>
    </Box>
    </>
  )
};

