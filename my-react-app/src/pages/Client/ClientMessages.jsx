import Navbar from "../../components/ClientPage/Navbar";
import React from "react";
import Box from '@mui/material/Box';
import Chats from "../../components/Chats/chat";
import Conversation from "../../components/Chats/conversation";
import Stack from '@mui/material/Stack';
import { useLocation  } from "react-router-dom";


export default function ClientMessages (){

  const location = useLocation();
  const doctorId = location.state ? location.state.id : null;;
  console.log(doctorId);

  return(
    <>
    <Box height={100} />
    <Box sx={{ display: 'flex' }}>
    <Navbar
    doctorId={doctorId}
    />     <Box component="main" sx={{ flexGrow: 1, p: 3}}>
       <Stack direction={"row"} spacing={2}>   
           <Chats/>
           <Conversation/>
        </Stack>
      </Box>
    </Box>
    </>
  )
};

