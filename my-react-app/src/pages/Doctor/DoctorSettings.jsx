import DoctorNavbar from "../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../components/NavBar/DoctorAppBar";
import Paper from '@mui/material/Paper';


export default function DoctorSettings  (){
  return(
    <>
     <DoctorAppBar/>
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <Paper className="body-container">
       </Paper>
      </Box>
    </Box>
    </>
  )
};


