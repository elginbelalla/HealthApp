import DoctorNavbar from "../../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../../components/NavBar/DoctorAppBar";
import Paper from '@mui/material/Paper';
import List from "./List";

export default function DoctorSettings  (){
  return(
    <>
    <div className="doctor-body">
     <DoctorAppBar/>
    <Box height={70} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <Paper className="body-container">
         <List/>
       </Paper>
      </Box>
    </Box>
    </div>
    </>
  )
};


