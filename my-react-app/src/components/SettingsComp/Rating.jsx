import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ProgressBar from './ProgressBar';
import './rating.css';

const ratingsData = [
  { stars: 5, count: 200000 },
  { stars: 4, count: 150000 },
  { stars: 3, count: 100000 },
  { stars: 2, count: 30000 },
  { stars: 1, count: 20000 },
];

export default function RatingStar() {
  const totalRatings = ratingsData.reduce((acc, value) => acc + value.count, 0);
  const averageRating =
    ratingsData.reduce((acc, value) => acc + value.stars * value.count, 0) / totalRatings;

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
        <Typography component="legend">234,222</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
        {ratingsData.map((rating) => (
          <ProgressBar
            key={rating.stars}
            label={rating.stars}
            value={rating.count}
            max={500000}
            count={rating.count}
          />
        ))}
      </Box>
    </Box>
  );
}