import DoctorNavbar from "../../components/NavBar/DoctorNavbar";
import React from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../components/NavBar/DoctorAppBar";
import './style.css'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { BarChart } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';
import './dashboard.css'
import MasksIcon from '@mui/icons-material/Masks';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

export default function DoctorDashboard (){
  const appointments = [
    { id: 1, name: "John Doe", avatar: "https://example.com/avatar1.jpg", time: "9:00 AM" },
    { id: 2, name: "Jane Smith", avatar: "https://example.com/avatar2.jpg", time: "10:30 AM" },
    { id: 3, name: "Jane Smith", avatar: "https://example.com/avatar2.jpg", time: "10:30 AM" },
    // Add more appointments as needed
  ];

  const labResults = [
    { id: 1, name: "Patient A", avatar: "https://example.com/avatar1.jpg", type: "Blood Test", date: "2024-04-30 10:00 AM" },
    { id: 2, name: "Patient B", avatar: "https://example.com/avatar2.jpg", type: "Urine Test", date: "2024-04-30 11:30 AM" },
    { id: 3, name: "Patient C", avatar: "https://example.com/avatar3.jpg", type: "X-Ray", date: "2024-04-30 2:00 PM" },
    // Add more lab results as needed
  ];


  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    ];

    const data = [
      { label: '5 Stars', value: 40, color: '#0088FE' },
      { label: '4 Stars', value: 300, color: '#00C49F' },
      { label: '3 Stars', value: 300, color: '#FFBB28' },
      { label: '2 Stars', value: 240, color: '#FF8042' },
      { label: '1 Stars', value: 20, color: '#5F9EA0' },
    ];
    
    
    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);
    
    const getArcLabel = (params) => {
      const percent = params.value / TOTAL;
      return `${(percent * 100).toFixed(0)}%`;
    };
    

  return(
    <>
    <DoctorAppBar/>
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar/>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <Paper className="body-container">
      
      <Grid container spacing={2}>
        <Grid item xs={7}>
        <Stack direction={"row"}>
          
          <Card sx={{ maxWidth:700, height: 40+"vh"}} className="card">
            <CardContent>
              <Typography gutterBottom component="div" className="sub-title">
                 My Appointments
              </Typography>
              <CardContent className="app-body">
                 {/* Mapping through appointments to render each appointment */}
                  {appointments.map((appointment, index) => (
                  <Box key={appointment.id} className="appointment" sx={{ marginBottom: 1 }}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                  {/* Avatar */}
                  <Avatar alt={appointment.name} src={appointment.avatar} className="avatar-p" />
                  {/* Name */}
                  <Typography variant="body1" className="p-name">{appointment.name}</Typography>
                  {/* Time */}
                  <Typography variant="body2" className="p-time">{appointment.time}</Typography>
                  </Stack>
                  </Box>
                ))}
            </CardContent>
            </CardContent>
          </Card> 

           {/* Recent Lab Results Card */}
           <Card sx={{ maxWidth:700,  height: 40+"vh" }} className="card">
             <CardContent>
              <Typography gutterBottom  component="div" className="sub-title">
                  Recent Lab Requests
              </Typography>
              <CardContent className="lab-body">
                {labResults.map((result) => (
                  <Box key={result.id} className="lab-result" sx={{ marginBottom: 1 }}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar alt={result.name} src={result.avatar} className="avatar-p" />
                    <Typography variant="body1" className="p-name">{result.name}</Typography>
                    <Typography variant="body2"  className="p-type">{result.type}</Typography>
                   <Typography variant="body2"  className="p-date">{result.date}</Typography>
                  </Stack>
                  </Box>
                ))}
                </CardContent>
              </CardContent>
            <CardActions>
           </CardActions>
           </Card>
           </Stack>
          </Grid>

           <Grid item xs={5}>
            <Stack direction={'column'}>

            <Card sx={{ maxWidth: 700, height: 20+"vh" }} className="card">
            <CardContent>
             <Typography gutterBottom component="div"  className="sub-title">
                 Number of Patients
               </Typography>
               <CardContent className="sub-card">
               <Stack direction={'row'} spacing={2}>
               <MasksIcon className="icon"/>
                <div className="card-text">
                <span className="num-patients">243</span>
                <span className="ev-patients">+21 from last week</span>
                </div>

                </Stack>
             </CardContent>
             </CardContent>
            </Card>

            <Card sx={{ maxWidth: 700,height: 20+"vh" }} className="card">
              <CardContent>
               <Typography gutterBottom component="div"  className="sub-title">
                 Number of Hours
               </Typography>
               <CardContent className="sub-card">
               <Stack direction={'row'} spacing={2}>
               <WatchLaterIcon className="icon"/>
               <div className="card-text">
                <span className="num-hours">243</span>
                <span className="ev-patients">+21 from last week</span>
                </div>
                </Stack>
               </CardContent>
               </CardContent>
            </Card>
           </Stack>
          </Grid>
        </Grid>

      <Box height={20} />
      <Grid container spacing={1}>
        <Grid item xs={7}>
        <Card sx={{height: 60+ "vh", maxWidth:600 }} className="card-2">
            <CardContent>
              <Typography gutterBottom component="div" className="sub-title">
                  Weekly Activity
              </Typography>
              <BarChart
                width={500}
                height={300}
                series={[
                    { data: pData, label: 'Patients Online', id: 'poId', color:'#0b8fac'},
                    { data: uData, label: 'Patient Apps', id: 'paId', color:'#16dbcc' },
                  ]}
                 xAxis={[{ data: xLabels, scaleType: 'band', }]}
              />
            </CardContent>
            <CardActions>
          
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={5}>
        <Card sx={{ maxWidth: 700, height: 60+ "vh" }} className="card-2">
            <CardContent>
              <Typography gutterBottom  component="div" className="sub-title">
                  Rating Statistics
              </Typography>
              </CardContent>
              <CardContent>
              <PieChart
             series={[
              {
                data,
                arcLabel: getArcLabel,
              },
              ]}
              width={400}
              height={200}
              />
            </CardContent>
            <CardActions>
          
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      </Paper>
      </Box>
    </Box>
    </>
  )
};

