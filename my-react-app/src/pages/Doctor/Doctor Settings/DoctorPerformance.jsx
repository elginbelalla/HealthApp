import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import RatingStar from '../../../components/SettingsComp/Rating';
import './docperformance.css';

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(5)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}


export default function DoctorPerformance({ doctorId }) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const [ratings, setRatings] = useState([]);
  const [appointmentCount, setAppointmentCount] = useState('');
  const [patientCount, setPatientCount] = useState('');
  const [reviews, setReviews] = useState([]);

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  useEffect(() => {
    fetchInfo();
  }, [doctorId]);

  const fetchInfo = async () => {
    try{
      const response = await fetch(`http://localhost/HealthApp/api/getDoctorPerformance`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: doctorId }),
        });

        if (response.ok) {
            const data = await response.json();
            const transformedRatings = Object.keys(data.ratings).map(star => ({
              stars: parseInt(star),
              count: data.ratings[star]
            }));

            setRatings(transformedRatings);
            setAppointmentCount(data.appointmentCount);
            setPatientCount(data.patients);
            setReviews(data.reviews);
            console.log(reviews);
        }
    }catch (error){
      console.error("Error fetching review data:", error);
    }
  };
  return (
    <Box sx={{ pb: 7, p: 2 }} ref={ref}>
      <CssBaseline />
      <Grid container spacing={2} direction={isSmallScreen ? 'column' : 'row'}>
        <Grid item xs={12} sm={6}>
          <Box>
            <Paper sx={{ p: 1, boxShadow: 'none' }}>
              <Typography className='header-title'>Ratings</Typography>
              <Box sx={{ boxShadow: 1, p: 2 }}>
                <RatingStar 
                ratingData = {ratings}
                />
              </Box>
            </Paper>
            <Paper sx={{ p: 2, boxShadow: 'none', mt: 2 }}>
              <Typography className='header-title'>Number of Patients</Typography>
              <Typography variant="h4" sx={{ boxShadow: 1, p: 3 }}>{patientCount}</Typography>
            </Paper>
            <Paper sx={{ p: 2, boxShadow: 'none', mt: 2 }}>
              <Typography className='header-title'>Number of Appointments</Typography>
              <Typography variant="h4" sx={{ boxShadow: 1, p: 3 }}>{appointmentCount}</Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 1, boxShadow: 'none', mt: isSmallScreen ? 2 : 0 }}>
            <Typography className='header-title'>Reviews</Typography>
            <List sx={{ boxShadow: 1, p: 1 }}>
              {reviews.map((review, index) => (
                <ListItemButton key={index}>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture"/>
                  </ListItemAvatar>
                  <ListItemText primary={review.clientName || 'No client name provided'} secondary={review.review || 'No review provided'} />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

const messageExamples = [
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary? I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
];