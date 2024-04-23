import DoctorNavbar from "../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../components/NavBar/DoctorAppBar";

export default function DoctorPatients (){
  return(
    <>  
    <DoctorAppBar/>
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <h1>Patients</h1>
      </Box>
    </Box>
    </>
  )
};

