import DoctorNavbar from "../../../components/NavBar/DoctorNavbar";
import React from "react";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import DoctorAppBar from "../../../components/NavBar/DoctorAppBar";
import TimePicker from "../../../components/TimePicker/TimePicker";
import Paper from '@mui/material/Paper';
import Calendar from "../../../components/Calendar/Calendar";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './appointment.css'
import '../doc_style.css'
import { useNavigate, useLocation  } from "react-router-dom";

export default function DoctorAppointments (){
  const [workingHours, setWorkingHours] = useState({ startWorkTime: null, endWorkTime: null });
  const [saving, setSaving] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const location = useLocation();
  const doctorId = location.state ? location.state.id : null;;
  console.log(doctorId);

  useEffect(() => {
    const fetchWorkingHours = async () => {
      try {
        const response = await fetch('http://localhost/HealthApp/api/getDoctorWorkingHours', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ doctorId }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched working hours:", data);
        setWorkingHours(data);
        console.log("Working hours state:", workingHours);
      } else {
          console.error('Failed to fetch working hours');
        }
      } catch (error) {
        console.error('Error while fetching working hours:', error);
      }
    };

    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost/HealthApp/api/getDoctorAppointments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ doctorId }),
        });
        if (response.ok) {
          const data = await response.json();
          setAppointments(data);
        } else {
          console.error('Failed to fetch appointments');
        }
      } catch (error) {
        console.error('Error while fetching appointments:', error);
      }
    };

    fetchWorkingHours();
    fetchAppointments();
  }, [doctorId]);

  const saveWorkingHours = async (startTime, endTime) => {

    console.log("Saving working hours...");
    console.log("Doctor ID:", doctorId);
    console.log(startTime);
    

    try {
      setSaving(true); 
      const response = await fetch('http://localhost/HealthApp/api/setDoctorWorkingHours', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          doctorId,
          workingHours: {
            startTime,
            endTime
        }
        }),
      });
      if (response.ok) {
        console.log('Working hours saved successfully');
      } else {
        console.error('Failed to save working hours');
      }
    } catch (error) {
      console.error('Error while saving working hours:', error);
    } finally {
      setSaving(false); 
    }
  };



  return(
    <>
    <div className="doctor-body">
    <DoctorAppBar
      doctorId={doctorId}
    />
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar
    id={doctorId}
    />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <Paper className="body-container">
        <Grid container spacing={2} margin={1}>       
         <Stack direction={'row'} spacing={2}>
          
          <Grid item xs={8}>
           <div className="working-hours">
             <span className="working-h-txt">Select Working Hours</span>
           <TimePicker onSave={saveWorkingHours} workingHours={workingHours}/>
           </div>
          </Grid>
          
          <Grid item xs={12}>
            <Calendar  appointments={appointments}/>
          </Grid>
          </Stack>
          </Grid>
         </Paper>
      </Box>
    </Box>
    </div>
    </>
  )
};

