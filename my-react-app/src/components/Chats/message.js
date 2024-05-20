import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import './message.css';
import { TextMsg, MediaMsg, LinkMsg, DocMsg } from "./MessageTypes/MessageTypes";

const Message = ({ chatHistory }) => {
  const groupedMessages = groupMessagesByDate(chatHistory);

  return (
    <Box className="msg-container">
      <Stack spacing={3}>
        {groupedMessages.map((group, index) => (
          <React.Fragment key={index}>
            <TimelineDivider text={group.date} />
            {group.messages.map((el, msgIndex) => {
              switch (el.type) {
                case "msg":
                  // Different types of possibilities
                  switch (el.subtype) {
                    case "img":
                      // Render MediaMsg component for images
                      return <MediaMsg key={msgIndex} el={el} />;
                    case "doc":
                      // Render DocMsg component for documents
                      return <DocMsg key={msgIndex} el={el} />;
                    case "link":
                      // Render LinkMsg component for links
                      return <LinkMsg key={msgIndex} el={el} />;
                    default:
                      return <TextMsg key={msgIndex} el={el} />;
                  }
                default:
                  return <></>;
              }
            })}
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  );
};

const TimelineDivider = ({ text }) => {
  // Convert the text to a Date object to ensure proper formatting
  const date = new Date(text);
 
  // Format the date string
  const formattedDate = date.toLocaleDateString('en-GB');

  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
      <Divider width="40%" sx={{ bgcolor:'black'}}/>
      <Typography 
        variant="caption"
        sx={{color: '#434343'}}>
        {formattedDate}
      </Typography>
      <Divider width="40%" sx={{ bgcolor:'black'}}/>
    </Stack>
  );
};

const groupMessagesByDate = (messages) => {
  const groups = [];
  let currentDate = null;
  let currentGroup = null;

  messages.forEach((message) => {
    const messageDate = new Date(message.timestamp).toDateString();
    if (messageDate !== currentDate) {
      // Start a new group
      currentDate = messageDate;
      currentGroup = { date: messageDate, messages: [] };
      groups.push(currentGroup);
    }
    currentGroup.messages.push(message);
  });

  return groups;
};

export default Message;