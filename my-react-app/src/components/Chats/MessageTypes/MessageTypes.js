import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import { PhotoOutlined as PhotoOutlinedIcon, PictureAsPdfOutlined as PictureAsPdfOutlinedIcon, InsertDriveFileOutlined as InsertDriveFileOutlinedIcon, GetApp as GetAppIcon } from '@mui/icons-material';
import './msgTypes.css';

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};

const DocMsg = ({ el }) => {
  const fileName = el.message.split(' - ')[0]; // Extracting filename before ' - '
  const fileExtension = fileName.split('.').pop().toLowerCase();
  
  let fileIcon;
  switch (fileExtension) {
    case 'pdf':
      fileIcon = <PictureAsPdfOutlinedIcon className="msg-icon" />;
      break;
    case 'doc':
    case 'docx':
      fileIcon = <InsertDriveFileOutlinedIcon className="msg-icon" />;
      break;
    default:
      fileIcon = <InsertDriveFileOutlinedIcon className="msg-icon" />;
  }
  
  return (
    <Stack direction={'row'} justifyContent={el.sender === 'client' ? "start" : "end"}>
      <Box className="media-msg-box" sx={{ backgroundColor: el.sender === 'client' ? "#d8d8d8" : "#61bfd6" }}>
        <Stack spacing={2}>
          <Stack p={2} spacing={2} direction={'row'} alignItems={'center'} sx={{ backgroundColor: "white", borderRadius: 2 }}>
            {fileIcon}
            <Typography className="msg-text" sx={{ color: el.sender === 'client' ? "#3f3f3f" : "#2d616e " }}>
              {fileName}
            </Typography>
            <a href={el.documentUrl} download>
              <GetAppIcon className="msg-icon" />
            </a>
          </Stack>
          <Typography className="msg-text" sx={{ color: el.sender === 'client' ? "#3f3f3f" : "white" }}>
            {el.text}
          </Typography>
          <Typography sx={{ color: el.sender === 'client' ? "#3f3f3f" : "white", textAlign: "right" }} className="timestamp">
            {formatTimestamp(el.timestamp)}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const LinkMsg = ({ el }) => {
  return (
    <Stack direction={'row'} justifyContent={el.sender === 'client' ? "start" : "end"}>
      <Box className="media-msg-box" sx={{ backgroundColor: el.sender === 'client' ? "#d8d8d8" : "#61bfd6" }}>
        <Stack spacing={2}>
          <Typography className="msg-text" sx={{ color: el.sender === 'client' ? "#3f3f3f" : "white" }}>
            {el.text}
          </Typography>
          <Typography sx={{ color: el.sender === 'client' ? "#3f3f3f" : "white", textAlign: "right" }} className="timestamp">
            {formatTimestamp(el.timestamp)}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const MediaMsg = ({ el }) => {
  return (
    <Stack direction={'row'} justifyContent={el.sender === 'client' ? "start" : "end"}>
      <Box className="media-msg-box" sx={{ backgroundColor: el.sender === 'client' ? "#d8d8d8" : "#61bfd6" }}>
        <Stack spacing={1}>
        <a href={el.img} download>
            <img src={el.img} alt={el.message} className="msg-img" />
           </a>
          <Typography className="msg-text" sx={{ color: el.sender === 'client' ? "#3f3f3f" : "white" }}>{el.text}</Typography>
          <Typography sx={{ color: el.sender === 'client' ? "#3f3f3f" : "white", textAlign: "right" }} className="timestamp">
            {formatTimestamp(el.timestamp)}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const TextMsg = ({ el }) => {
  return (
    <Stack direction={'row'} justifyContent={el.sender === 'client' ? "start" : "end"}>
      <Box className="msg-box" sx={{ backgroundColor: el.sender === 'client' ? "#d8d8d8" : "#61bfd6" }}>
        <Typography className="msg-text" sx={{ color: el.sender === 'client' ? "#3f3f3f" : "white" }}>{el.text}</Typography>
        <Typography sx={{ color: el.sender === 'client' ? "#3f3f3f" : "white", textAlign: "right" }} className="timestamp">
          {formatTimestamp(el.timestamp)}
        </Typography>
      </Box>
    </Stack>
  );
};

export { TextMsg, MediaMsg, LinkMsg, DocMsg };