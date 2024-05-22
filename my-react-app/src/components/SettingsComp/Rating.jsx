import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ProgressBar from './ProgressBar';
import './rating.css';


export default function RatingStar({ratingData}) {
  const totalRatings = ratingData.reduce((acc, rating) => acc + rating.count, 0);
  const weightedSum = ratingData.reduce((acc, rating) => acc + rating.stars * rating.count, 0);

  const averageRating = weightedSum / totalRatings;

    
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
      <Box sx={{ mr: 4 }} className="rating-box">
        <Typography className="ratingNum">{averageRating.toFixed(1)}</Typography>
        <Rating
          name="average-rating"
          value={averageRating}
          max={5}
          precision={0.5}
          readOnly
        />
        <Typography component="legend">{totalRatings}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
        {ratingData.map((rating) => (
          <ProgressBar
            key={rating.stars}
            label={rating.stars}
            value={rating.count}
            max={totalRatings}
            count={rating.count}
          />
        ))}
      </Box>
    </Box>
  );
}