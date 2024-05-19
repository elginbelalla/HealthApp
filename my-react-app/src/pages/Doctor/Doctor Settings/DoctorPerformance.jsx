import React from 'react';
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

export default function DoctorPerformance() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <Box sx={{ pb: 7, p: 2 }} ref={ref}>
      <CssBaseline />
      <Grid container spacing={2} direction={isSmallScreen ? 'column' : 'row'}>
        <Grid item xs={12} sm={6}>
          <Box>
            <Paper sx={{ p: 1, boxShadow: 'none' }}>
              <Typography className='header-title'>Ratings</Typography>
              <Box sx={{ boxShadow: 1, p: 2 }}>
                <RatingStar />
              </Box>
            </Paper>
            <Paper sx={{ p: 2, boxShadow: 'none', mt: 2 }}>
              <Typography className='header-title'>Number of Patients</Typography>
              <Typography variant="h4" sx={{ boxShadow: 1, p: 3 }}>150</Typography>
            </Paper>
            <Paper sx={{ p: 2, boxShadow: 'none', mt: 2 }}>
              <Typography className='header-title'>Number of Appointments</Typography>
              <Typography variant="h4" sx={{ boxShadow: 1, p: 3 }}>200</Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 1, boxShadow: 'none', mt: isSmallScreen ? 2 : 0 }}>
            <Typography className='header-title'>Reviews</Typography>
            <List sx={{ boxShadow: 1, p: 1 }}>
              {messages.map(({ primary, secondary, person }, index) => (
                <ListItemButton key={index + person}>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={person} />
                  </ListItemAvatar>
                  <ListItemText primary={primary} secondary={secondary} />
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