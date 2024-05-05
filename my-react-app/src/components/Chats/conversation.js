import React from "react";
import {Box, Stack, Avatar, Badge, Typography, IconButton, TextField, InputAdornment, Button} from "@mui/material"
import './conversation.css'
import { styled } from '@mui/material/styles';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SendIcon from '@mui/icons-material/Send';

const StyleInput = styled(TextField)(({theme})=>({
   "& .MuiInputBase-input":{
   paddingTop:"12px",
   paddingBottom:"12px",
   border:"none"
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


const Conversation=()=>{
    return(
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
                     <Avatar/>
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
            
            </Box>
            {/*Chat footer*/}
            <Box className="chat-footer">
             <Stack direction={'row'} spacing={2} alignItems={'center'}>
              <StyleInput
               fullWidth
                placeholder="Write a message..."
                InputProps={{
                    startAdornment: <InputAdornment>
                    <IconButton>
                    <AttachFileOutlinedIcon />
                    </IconButton>
                    </InputAdornment>,
                     endAdornment: <InputAdornment>
                     <IconButton>
                     <SentimentSatisfiedOutlinedIcon  />
                     </IconButton>
                     </InputAdornment>,

                }} />

             <Button variant="none" endIcon={<SendIcon />}/>
             </Stack>
            </Box>
        </Stack>
        </Box>
    )
}

export default Conversation;