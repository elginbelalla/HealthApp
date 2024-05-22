import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/system';
import LinearProgress from '@mui/material/LinearProgress';


const RatingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const StarRating = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '2.5rem',
  fontWeight: 'bold',
}));

const StarCount = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const RatingBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

const BarLabel = styled(Typography)(({ theme }) => ({
  minWidth: 35,
}));

const CustomStarIcon = styled(StarIcon)(({ theme }) => ({
  color: '#52b2e2', // Change this color to whatever you prefer
}));

const RatingComponent = ({ rating, ratingCount }) => {
  const totalRatingsCount = ratingCount.reduce((acc, count) => acc + count, 0);
  const ratingLabels = ['1', '2', '3', '4', '5'];



  return (
    <Box>
      <Typography variant="h6" gutterBottom>My Rating</Typography>
      <RatingBox>
        <StarRating>
          {rating}
          <CustomStarIcon  fontSize="large"/>
        </StarRating>
        <StarCount>({totalRatingsCount.toLocaleString()})</StarCount>
      </RatingBox>

      {ratingLabels.map((label, index) => (
        <RatingBar key={label}>
          <BarLabel>{label}</BarLabel>
          <Box sx={{ flexGrow: 1, mx: 1 }}>
            <LinearProgress
              variant="determinate"
              value={(ratingCount[index] / totalRatingsCount) * 100}
            />
          </Box>
          <Typography variant="body2" color="textSecondary">
            {ratingCount[index]}
          </Typography>
        </RatingBar>
      ))}
    </Box>
  );
};

export default RatingComponent;