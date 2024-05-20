import Navbar from "../../components/ClientPage/Navbar";
import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from "./List";

export default function ClientSettings  (){
  return(
    <>
    <Box height={110} />
    <Box sx={{ display: 'flex' }}>
    <Navbar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <Paper className="body-container">
         <List/>
       </Paper>
      </Box>
    </Box>
    </>
  )
};


