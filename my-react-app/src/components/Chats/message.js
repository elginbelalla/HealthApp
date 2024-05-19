import React from "react";
import { Box, Stack } from "@mui/material";
import './message.css';
import { TextMsg, TimeLine, MediaMsg, LinkMsg, DocMsg } from "./MessageTypes/MessageTypes";

const Message = ({ chatHistory }) => {
  return (
    <Box className="msg-container">
      <Stack spacing={3}>
        {chatHistory.map((el, index) => {
          switch (el.type) {
            case "divider":
              return <TimeLine key={index} el={el} />;
            case "msg":
              // Different types of possibilities
              switch (el.subtype) {
                case "img":
                  // Render MediaMsg component for images
                  return <MediaMsg key={index} el={el} />;
                case "doc":
                  // Render DocMsg component for documents
                  return <DocMsg key={index} el={el} />;
                case "link":
                  return <LinkMsg key={index} el={el} />;
                default:
                  return <TextMsg key={index} el={el} />;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;