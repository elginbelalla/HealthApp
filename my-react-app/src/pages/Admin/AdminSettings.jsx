import AdminNavbar from "../../components/NavBar/AdminNavbar";
import React from "react";
import Box from '@mui/material/Box';
import AdminAppBar from "../../components/NavBar/AdminAppBar";
import Paper from '@mui/material/Paper';
import List from "./List";

export default function DoctorSettings  (){
  return(
    <>
    <div className="admin-body">
     <AdminAppBar/>
    <Box height={70} />
    <Box sx={{ display: 'flex' }}>
    <AdminNavbar/>
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


