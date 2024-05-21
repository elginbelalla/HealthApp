import DoctorNavbar from "../../components/NavBar/DoctorNavbar";
import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../components/NavBar/DoctorAppBar";
import './doc_style.css'
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
import { useNavigate, useLocation  } from "react-router-dom";


export default function DoctorDashboard (){

  const [appointments, setAppointments] = useState([]);
  const [labResults, setLabResults] = useState([]);
  const [patientsThisWeek, setPatientsThisWeek] = useState([]);
  const [numberOfHours, setNumberOfHours] = useState(0)
  const [ratings, setRatings] = useState([]);
  const [weeklyAppointments, setWeeklyAppointments] = useState({});
  const [uniquePatientsPerDay, setUniquePatientsPerDay] = useState([]);

  const location = useLocation();

  const id = location.state ? location.state.id : null;;
  
  console.log(id);
  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async () =>{
    try {

      const response = await fetch(`http://localhost/HealthApp/api/getDashboard`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }), 
      });

      if (response.ok) {
        const responseText = await response.text();
        console.log('Raw response text:', responseText);
        try {
          const data = JSON.parse(responseText);
          console.log('Received data:', data); 
  
          setAppointments(data.appointments);
          setLabResults(data.labRequests);
          setPatientsThisWeek(data.patientCountThisWeek);
          const hours = (data.patientCountThisWeek * 0.30).toFixed(2);
          setNumberOfHours(hours);
          setRatings(data.ratings);
          setWeeklyAppointments(data.weeklyAppointments);
          setUniquePatientsPerDay(data.uniquePatientsPerDay);

        } catch (jsonError) {
          console.error("Failed to parse JSON:", jsonError);
        }
      } else {
        console.error("Failed to fetch previous data: bad res", await response.text());
      }
    } catch (error) {
      console.error("Failed to fetch previous data: db", error.message);
    }
  };


  const xLabels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    ];

    const uData = xLabels.map(day=> weeklyAppointments[day] || 0);
    const pData = xLabels.map(day=> uniquePatientsPerDay[day] || 0);

    const totalRatingsCount = Object.values(ratings).reduce((total, count) => total + count, 0);
    const defaultRatings = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    const finalRatings = Object.keys(ratings).length ? ratings : defaultRatings;   

    const chartData = Object.keys(finalRatings).map((rating, index) => ({
      label: `${rating} Stars `,
      value: (finalRatings[rating] / totalRatingsCount) * 100,
      color: index === 1 ? '#5F9EA0' : index === 2 ? '#FF8042' : index === 3 ? '#FFBB28' : index === 4 ? '#00C49F' : '#0088FE',
    }));

  return(
    <>
    <div className="doctor-body">
    <DoctorAppBar
      doctorId={id}
    />
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar
      id={id}
    />
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
                  <Typography variant="body1" className="p-name">{appointment.clientNameApp}</Typography>
                  {/* Time */}
                  <Typography variant="body2" className="p-time">{appointment.dateOfAppointment}</Typography>
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
                    <Typography variant="body1" className="p-name">{result.clientNameReq}</Typography>
                    <Typography variant="body2"  className="p-type">{result.testType}</Typography>
                   <Typography variant="body2"   className="p-date">{result.requestDate}</Typography>
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
                 Number of Patients This Week
               </Typography>
               <CardContent className="sub-card">
               <Stack direction={'row'} spacing={2}>
               <MasksIcon className="icon"/>
                <div className="card-text">
                <span className="num-patients">{patientsThisWeek}</span>
                <span className="ev-patients"></span>
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
                <span className="num-hours">{numberOfHours}</span>
                <span className="ev-patients"></span>
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
                    { data: pData, label: 'Number of Patients', id: 'poId', color:'#0b8fac'},
                    { data: uData, label: 'Number of Appointments', id: 'paId', color:'#16dbcc' },
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
                data: chartData ,
                arcLabel: null,
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
    </div>
    </>
  )
};

