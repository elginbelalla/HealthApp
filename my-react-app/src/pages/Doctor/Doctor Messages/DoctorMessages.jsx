import DoctorNavbar from "../../../components/NavBar/DoctorNavbar";
import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../../components/NavBar/DoctorAppBar";
import Chats from "../../../components/Chats/chat";
import Conversation from "../../../components/Chats/conversation";
import Stack from '@mui/material/Stack';
import './messages.css'
import { useLocation } from "react-router-dom";



export default function DoctorMessages (){


  const [selectedChat, setSelectedChat] = useState(null);
  const [conversations, setConversations] = useState([]);

  const location = useLocation();
  const doctorId = location.state ? location.state.id : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost/HealthApp/api/getDoctorConversations`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: doctorId }), 
        });

        if (response.ok) {
          const responseText = await response.text();
          try {
            const data = JSON.parse(responseText);
            setConversations(data.conversationInfo);
          } catch (jsonError) {
            console.error("Failed to parse JSON:", jsonError);
          }
        } else {
          console.error("Failed to fetch previous data: bad res", await response.text());
        }
      } catch (error) {
        console.error("Failed to fetch previous data: db", error.message);
      }
    };

    fetchData();
  }, [doctorId]);

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
      <Box component="main" sx={{ flexGrow: 1, p: 1 }} >
       <Stack direction={"row"} spacing={2}>   
           <Chats conversations={conversations} onSelectChat={setSelectedChat} />
           <Conversation
           selectedChat={selectedChat}
           />
        </Stack>
      </Box>
    </Box>
    </div>
    </>
  )
};

