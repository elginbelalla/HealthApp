import DoctorNavbar from "../../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../../components/NavBar/DoctorAppBar";
import Chats from "../../../components/Chats/chat";
import Conversation from "../../../components/Chats/conversation";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


export default function DoctorMessages (){
  return(
    <>
    <DoctorAppBar/>
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar/>
     <Box component="main" sx={{ flexGrow: 1, p: 3}}>
       <Stack direction={"row"} spacing={2}>   
           <Chats/>
           <Conversation/>
        </Stack>
      </Box>
    </Box>
    </>
  )
};

