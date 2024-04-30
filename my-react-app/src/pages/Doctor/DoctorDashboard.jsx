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
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import './dashboard.css'


export default function DoctorDashboard (){
  const appointments = [
    { id: 1, name: "John Doe", avatar: "https://example.com/avatar1.jpg", time: "9:00 AM" },
    { id: 2, name: "Jane Smith", avatar: "https://example.com/avatar2.jpg", time: "10:30 AM" },
    { id: 3, name: "Alice Johnson", avatar: "https://example.com/avatar3.jpg", time: "2:00 PM" },
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
    
    const sizing = {
      margin: { right: 5 },
      width: 300,
      height: 300,
      legend: { hidden: true },
    };
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
       <Grid item xs={12}>
        <Stack spacing={5} direction={"row"}>

          <Card sx={{ maxWidth:700}}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                 My Appointments
              </Typography>
              <div className="app-body">
                 {/* Mapping through appointments to render each appointment */}
                  {appointments.map((appointment, index) => (
                  <Box key={appointment.id} className="appointment" sx={{ marginBottom: 3 }}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                  {/* Avatar */}
                  <Avatar alt={appointment.name} src={appointment.avatar} />
                  {/* Name */}
                  <Typography variant="body1">{appointment.name}</Typography>
                  {/* Time */}
                  <Typography variant="body2" color="textSecondary">{appointment.time}</Typography>
                  </Stack>
                  </Box>
                ))}
            </div>
            </CardContent>
            <CardActions>
          
            </CardActions>
          </Card> 
          
           {/* Recent Lab Results Card */}
           <Card sx={{ maxWidth:700}}>
             <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                  Recent Lab Results
              </Typography>
              <Typography className="lab-body">
                {labResults.map((result) => (
                  <Box key={result.id} className="lab-result" sx={{ marginBottom: 3 }}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar alt={result.name} src={result.avatar} />
                    <Typography variant="body1">{result.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{result.type}</Typography>
                   <Typography variant="body2" color="textSecondary">{result.date}</Typography>
                  </Stack>
                  </Box>
                ))}
                </Typography>
              </CardContent>
            <CardActions>
           </CardActions>
           </Card>

         </Stack>
        </Grid>

      </Grid>
      <Box height={20} />
      <Grid container spacing={1}>
        <Grid item xs={8}>
        <Card sx={{height: 60+ "vh", maxWidth:600 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  Weekly Activity
              </Typography>
              <BarChart
                width={500}
                height={300}
                series={[
                    { data: pData, label: 'Patients Online', id: 'poId'},
                    { data: uData, label: 'Patient Apps', id: 'paId' },
                  ]}
                 xAxis={[{ data: xLabels, scaleType: 'band' }]}
              />
            </CardContent>
            <CardActions>
          
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 700, height: 60+ "vh" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  Rating Statistics
              </Typography>
              <PieChart
              series={[
               {
                outerRadius: 80,
                data,
                arcLabel: getArcLabel,
              },
               ]}
               sx={{
               [`& .${pieArcLabelClasses.root}`]: {
                fill: 'white',
                fontSize: 14,
               },
               }}
               {...sizing}
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

