import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const ProgressBarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

const ValueBox = styled(Box)(({ theme }) => ({
  minWidth: 20,
  marginRight: theme.spacing(1),
}));

const ProgressBarWrapper = styled(Box)(({ theme }) => ({
  width: 200, // Set a fixed width for the wrapper
  position: 'relative',
  marginRight: theme.spacing(1),
  '&:hover .hoverValue': {
    display: 'block',
  },
}));


const HoverValue = styled(Box)(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  top: '-25px',
  left: '70%',
  transform: 'translateX(-50%)',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  zIndex: 1,
  fontFamily: 'Roboto, sans-serif',
  padding: theme.spacing(0.5, 1), // Add padding inside the box
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Make the box slightly transparent
  color: theme.palette.text.secondary, // Use a lighter color for the text
}));


const ProgressBar = ({ label, value, max, count }) => {
  const normalizedValue = (value / max) * 100;

  return (
    <ProgressBarContainer>
      <ValueBox>
        <Typography variant="body2" color="textSecondary">
          {label}
        </Typography>
      </ValueBox>
      <ProgressBarWrapper>
        <LinearProgress
          variant="determinate"
          value={normalizedValue}
          sx={{
            height: 10,
            borderRadius: 5,
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#388192',
            },
          }}
        />
        <HoverValue className="hoverValue">
          {count} 
        </HoverValue>
      </ProgressBarWrapper>
    </ProgressBarContainer>
  );
};

export default ProgressBar;