import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import DoctorNavbar from "../../../components/NavBar/DoctorNavbar";
import DoctorAppBar from "../../../components/NavBar/DoctorAppBar";
import Chats from "../../../components/Chats/chat";
import Conversation from "../../../components/Chats/conversation"; // Import Conversation component
import Stack from '@mui/material/Stack';
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import './messages.css'

export default function DoctorMessages() {
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

  return (
    <div className="doctor-body">
      <DoctorAppBar doctorId={doctorId} />
      <Box height={60} />
      <Box sx={{ display: 'flex' }}>
        <DoctorNavbar id={doctorId} />     
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Stack direction={"row"} spacing={2}>
            <Box sx={{ width: '30%', borderRight: "1px solid #e0e0e0", overflowY: "auto" }}>
              <Chats 
                conversations={conversations} 
                onSelectChat={setSelectedChat} 
                selectedChat={selectedChat} 
              />
            </Box>
            <Box className="convo-default">
              {selectedChat ? (
                <Conversation selectedChat={selectedChat} />
              ) : (
  
                <Typography className="convo-default-title">  
                  Select a conversation
                </Typography>
              )}
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}