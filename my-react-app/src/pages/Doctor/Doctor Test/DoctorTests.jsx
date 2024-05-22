import DoctorNavbar from "../../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../../components/NavBar/DoctorAppBar";
import TestList from "./TestList";
import './docTest.css'
import '../doc_style.css'
import { useLocation  } from "react-router-dom";


export default function DoctorTests  (){


  const location = useLocation();
  const doctorId = location.state ? location.state.id : null;;
  console.log(doctorId);

  return(
    <>
    <div className="doctor-body">
     <DoctorAppBar
     doctorId={doctorId}
     />
    <Box height={70} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar
      id={doctorId}
    />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         
         <TestList className="table" doctorId={doctorId}/>
      
      </Box>
    </Box>
    </div>
    </>
  )
};

