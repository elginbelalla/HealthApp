import DoctorNavbar from "../../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../../components/NavBar/DoctorAppBar";
import TestList from "./TestList";
import './docTest.css'


export default function DoctorTests  (){
  return(
    <>
     <DoctorAppBar/>
    <Box height={70} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         
         <TestList className="table" />
      
      </Box>
    </Box>
    </>
  )
};

