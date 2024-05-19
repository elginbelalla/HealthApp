import React from "react";
import {Box,Stack,Typography, Divider, Link} from "@mui/material"
import './msgTypes.css'
import { PhotoOutlined as PhotoOutlinedIcon, PictureAsPdfOutlined as PictureAsPdfOutlinedIcon, InsertDriveFileOutlined as InsertDriveFileOutlinedIcon, GetApp as GetAppIcon } from '@mui/icons-material';


const DocMsg = ({ el }) => {
    // Extract file extension from message (assuming the message contains the filename with extension)
    const fileName = el.message.split('.').slice(0, -1).join('.');
    const fileExtension = el.message.split('.').pop().toLowerCase();
  
    // Define icons for different file types
    let fileIcon;
    switch (fileExtension) {
      case 'pdf':
        fileIcon = <PictureAsPdfOutlinedIcon />;
        break;
      case 'doc':
      case 'docx':
        fileIcon = <InsertDriveFileOutlinedIcon />;
        break;
      default:
        fileIcon = <InsertDriveFileOutlinedIcon />;
    }
  
    return (
      <Stack direction={'row'} justifyContent={el.incoming ? "start" : "end"}>
        <Box className="media-msg-box" sx={{ backgroundColor: el.incoming ? "#d8d8d8" : "#61bfd6" }}>
          <Stack spacing={2}>
            <Stack p={2} spacing={2} direction={'row'} alignItems={'center'} sx={{ backgroundColor: "white", borderRadius: 2 }}>
              {fileIcon}
              <Typography className="msg-text" sx={{ color: el.incoming ? "#3f3f3f" : "white" }}>{`${fileName}.${fileExtension}`}</Typography>
              <GetAppIcon className="msg-icon" />
            </Stack>
            <Typography className="msg-text" sx={{ color: el.incoming ? "#3f3f3f" : "white" }}>{el.message}</Typography>
          </Stack>
        </Box>
      </Stack>
    );
  };
  

const LinkMsg=({el})=>{
    return(
        <Stack direction={'row'} justifyContent={el.incoming ? "start" : "end"}>
        <Box className="media-msg-box" sx={{backgroundColor: el.incoming ? "#d8d8d8": "#61bfd6"}}>
          <Stack spacing={2}>
          <Typography className="msg-text" sx={{ color:el.incoming ? "#3f3f3f": "white"}} component={Link}>{el.preview}</Typography>
           <Typography className="msg-text" sx={{ color:el.incoming ? "#3f3f3f": "white"}}>{el.message}</Typography>
          </Stack>
        </Box>
       </Stack>
    )
}

const MediaMsg=({el})=>{
    return(
        <Stack direction={'row'} justifyContent={el.incoming ? "start" : "end"}>
         <Box className="media-msg-box" sx={{backgroundColor: el.incoming ? "#d8d8d8": "#61bfd6"}}>
           <Stack spacing={1}>
            <img src={el.img} alt={el.message} className="msg-img"/>
            <Typography className="msg-text" sx={{ color:el.incoming ? "#3f3f3f": "white"}}>{el.message}</Typography>
           </Stack>
         </Box>
        </Stack>
    )
}

const TextMsg=({el})=>{
    return(
        <Stack direction={'row'} justifyContent={el.incoming ? "start" : "end"}>
         <Box className="msg-box" sx={{backgroundColor: el.incoming ? "#d8d8d8": "#61bfd6"}}>
           <Typography className="msg-text" sx={{ color:el.incoming ? "#3f3f3f": "white"}}>{el.message}</Typography>
         </Box>
        </Stack>
    )

}


const TimeLine=({el})=>{
    return(
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
         <Divider width="46%" sx={{ bgcolor:'black'}}/>
         <Typography 
         variant="caption"
         sx={{color: '#434343'}}>{el.text}</Typography>
         <Divider width="40%" sx={{ bgcolor:'black'}}/>
       </Stack>
    ) 

    
};

export {TimeLine, TextMsg, MediaMsg, LinkMsg, DocMsg};