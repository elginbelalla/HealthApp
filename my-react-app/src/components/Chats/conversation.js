import React, { useState, useEffect } from "react";
import { Box, Stack, Avatar, Badge, Typography, IconButton, TextField, InputAdornment, Button } from "@mui/material";
import './conversation.css';
import { styled } from '@mui/material/styles';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SendIcon from '@mui/icons-material/Send';
import Message from "./message";

const StyleInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
    border: "none"
  }
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const detectUrl = (message) => {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const urls = message.match(urlPattern);
  return urls ? urls[0] : null;
};

const Conversation = ({ selectedChat, sender, refreshConversations }) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [attachedFiles, setAttachedFiles] = useState([]);

  useEffect(() => {
    if (selectedChat) {
      const allMessages = [...selectedChat.clientMessages, ...selectedChat.doctorMessages];
      allMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
      setChatHistory(allMessages);
    } else {
      setChatHistory([]);
    }
  }, [selectedChat]);

  const handleAttachFile = (e) => {
    const files = e.target.files;
    const categorizedFiles = Array.from(files).map(file => {
      const extension = file.name.split('.').pop().toLowerCase();
      const url = URL.createObjectURL(file);  // Ensure URL creation is correct
      if (['png', 'jpeg', 'jpg'].includes(extension)) {
        return { name: file.name, subtype: "img", img: url, message: "" };
      } else {
        return { name: file.name, subtype: "doc", url, message: file.name };
      }
    });
    setAttachedFiles(prev => [...prev, ...categorizedFiles]);
  };


  const handleMessageSend = async () => {
    if (message.trim() === "" && attachedFiles.length === 0) {
      return;
    }

    const newMessages = [];
    const timestamp = new Date();

    attachedFiles.forEach(file => {
      if (file.subtype === "img") {
        const imgMessage = message.trim() !== "" ? message : "";
        newMessages.push({
          type: "msg",
          message: imgMessage,
          img: file.img || null,
          url: file.url || null,
          subtype: file.subtype,
          timestamp: timestamp.getTime(),
          incoming: false,
          outgoing: true
        });
      } else {
        const fileMessage = `${file.name} - ${message}`;
        newMessages.push({
          type: "msg",
          message: fileMessage,
          url: file.url || null,
          subtype: file.subtype,
          timestamp: timestamp.getTime(),
          incoming: false,
          outgoing: true
        });
      }
    });

    const detectedUrl = detectUrl(message);
    if (detectedUrl) {
      newMessages.push({
        type: "msg",
        subtype: "link",
        url: detectedUrl,
        preview: detectedUrl,
        message: message.replace(detectedUrl, "").trim(),
        timestamp: timestamp.getTime(),
        sender: sender,
        clientDoctorConversationId: selectedChat.clientDoctoraConversationId,
      });
    }

    if (message.trim() !== "" && !detectedUrl && attachedFiles.length === 0) {
      newMessages.push({
        type: "msg",
        message: message.trim(),
        timestamp: timestamp.getTime(),
        sender: sender,
        clientDoctorConversationId: selectedChat.clientDoctoraConversationId,
      });
    }

    setChatHistory(prevChatHistory => [...prevChatHistory, ...newMessages]);
    setMessage("");
    setAttachedFiles([]);

    try {
      const response = await fetch('http://localhost/HealthApp/api/setMessagesToBackend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessages), 
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      refreshConversations();  
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleMessageSend();
      refreshConversations();  
    }
  };

  if (!selectedChat) {
    return (
      <Box className="container">
        <Box className="default-convo">
          <Typography>Select a conversation</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box className="container">
      <Stack maxHeight={"100vh"}>
        <Box className="chat-header">
          <Stack className="header" direction={'row'}>
            <Stack direction="row" spacing={4} alignItems="center">
              <Box>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot">
                  <Avatar src={selectedChat.avatar} alt={selectedChat.clientName} />
                </StyledBadge>
              </Box>
              <Stack className="user-info" direction={'column'}>
                <Typography className="user-name">{selectedChat.clientName}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>


        <Box className="chat-msg">
          <Message chatHistory={chatHistory} />
        </Box>


        <Box className="chat-footer">
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <StyleInput
              fullWidth
              placeholder="Write a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <input
                      type="file"
                      id="file"
                      multiple
                      onChange={handleAttachFile}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="file">
                      <IconButton component="span">
                        <AttachFileOutlinedIcon />
                      </IconButton>
                    </label>
                  </InputAdornment>
                ),
              }}
            />
            <Button onClick={handleMessageSend}>
              <SendIcon />
            </Button>
          </Stack>
        </Box>
        {attachedFiles.length > 0 && (
          <Box>
            Attached Files:
            {attachedFiles.map((file, index) => (
              <div key={index}>{file.name} ({file.subtype})</div>
            ))}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Conversation;