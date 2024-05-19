import React, { useState } from "react";
import { Box, Stack, Avatar, Badge, Typography, IconButton, TextField, InputAdornment, Button } from "@mui/material";
import './conversation.css';
import { styled } from '@mui/material/styles';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
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

const Conversation = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [attachedFiles, setAttachedFiles] = useState([]);

  const handleAttachFile = (e) => {
    const files = e.target.files;
    const categorizedFiles = Array.from(files).map(file => {
      // Get the file extension
      const extension = file.name.split('.').pop().toLowerCase();
      // Check if the file extension indicates an image
      if (['png', 'jpeg', 'jpg'].includes(extension)) {
        // For images, set img property
        return { name: file.name, subtype: "img", img: URL.createObjectURL(file), message: file.name };
      } else {
        // For documents, set message property
        return { name: file.name, subtype: "doc", message: file.name };
      }
    });
    // Update the attachedFiles state
    setAttachedFiles(prev => [...prev, ...categorizedFiles]);
  };

  
  const handleMessageSend = () => {
    // Check if either the message field is not empty or there are attached files
    if ((message.trim() !== "" || attachedFiles.length > 0)) {
      // Prepare the message object
      const newMessage = { type: "msg", message, incoming: false, outgoing: true };
  
      // If there are attached files, include them in the message
      if (attachedFiles.length > 0) {
        newMessage.attachedFiles = attachedFiles;
      }
  
      // Add the current message to the chat history
      setChatHistory(prev => [...prev, newMessage]);
  
      // Clear the input field
      setMessage("");
      setAttachedFiles([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleMessageSend();
    }
  };

  return (
    <Box className="container">
      <Stack maxHeight={"100vh"}>
        {/*Chat header*/}
        <Box className="chat-header">
          <Stack className="header" direction={'row'}>
            <Stack direction="row" spacing={4} alignItems="center">
              <Box>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot">
                  <Avatar />
                </StyledBadge>
              </Box>
              <Stack className="user-info" direction={'column'}>
                <Typography className="user-namee">
                  Filan Fisteku
                </Typography>
                <Typography className="user-time">
                  Last seen time age
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        {/*Message*/}
        <Box className="chat-msg">
          <Message chatHistory={chatHistory} />
        </Box>
        {/*Chat footer*/}
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
                       style={{ display: 'none' }}
                       multiple
                       onChange={handleAttachFile} // Connect handleAttachFile function here
                      />
                      <IconButton onClick={() => document.querySelector('input[type="file"]').click()}>
                      <AttachFileOutlinedIcon />
                      </IconButton>
                      </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SentimentSatisfiedOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }} />
            <Button variant="none" endIcon={<SendIcon />} onClick={handleMessageSend} />
          </Stack>
        </Box>
        {/* Display attached file names, if needed */}
          {attachedFiles.length > 0 && (
          <Box>
          Attached Files:
          {attachedFiles.map((file, index) => (
          <div key={index}>{file.name} ({file.type})</div>
          ))}
          </Box>
        )}
      </Stack>
    </Box>
  );
}

export default Conversation;