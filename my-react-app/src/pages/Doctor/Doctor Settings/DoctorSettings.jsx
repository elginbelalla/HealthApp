import DoctorNavbar from "../../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../../components/NavBar/DoctorAppBar";
import Paper from '@mui/material/Paper';
import List from "./List";
import '../doc_style.css'
import { useLocation  } from "react-router-dom";


export default function DoctorSettings  (){
  const location = useLocation();

  const id = location.state ? location.state.id : null;;

  console.log(id);

  return(
    <>
    <div className="doctor-body">
     <DoctorAppBar
      doctorId={id}
    />
    <Box height={70} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar
    id={id}
    />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <Paper className="body-container">
         <List
         doctorId={id}
         />
       </Paper>
      </Box>
    </Box>
    </div>
    </>
  )
};


