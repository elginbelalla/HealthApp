import DoctorNavbar from "../../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../../components/NavBar/DoctorAppBar";
import Chats from "../../../components/Chats/chat";
import Conversation from "../../../components/Chats/conversation";
import Stack from '@mui/material/Stack';
import { useLocation  } from "react-router-dom";


export default function DoctorMessages (){

  const location = useLocation();
  const doctorId = location.state ? location.state.id : null;;
  console.log(doctorId);

  return(
    <>
    <div className="doctor-body">
    <DoctorAppBar
       doctorId={doctorId}
    />
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar
      id={doctorId}
      />     
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
       <Stack direction={"row"} spacing={2}>   
           <Chats/>
           <Conversation/>
        </Stack>
      </Box>
    </Box>
    </div>
    </>
  )
};

