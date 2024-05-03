import DoctorNavbar from "../../../components/NavBar/DoctorNavbar";
import React,  { useState } from "react";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../../components/NavBar/DoctorAppBar";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import './patient.css'; // Import external CSS file
import SearchPatientBar from "./PatientBar";


export default function DoctorPatients() {
  
  const patients = [
    { name: 'John Doe', date: '2024-05-03', diagnosis: 'Death', avatarSrc: '/path_to_avatar_image.jpg' },
    { name: 'John Doe', date: '2024-05-03', diagnosis: 'Death', avatarSrc: '/path_to_avatar_image.jpg' },
    { name: 'John Doe', date: '2024-05-03', diagnosis: 'Death', avatarSrc: '/path_to_avatar_image.jpg' },
    { name: 'John Doe', date: '2024-05-03', diagnosis: 'Death', avatarSrc: '/path_to_avatar_image.jpg' },
    // Add more patient data as needed
  ];
 
  return (
    <>  
      <DoctorAppBar />
      <Box height={60} />
      <Box sx={{ display: 'flex' }}>
        <DoctorNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Paper className="body-container">
            <SearchPatientBar />
            <Box className="card-container">
              {patients.map((patient, index) => (
                <Card className="patient-card" key={index}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar className="avatar" alt="User Avatar" src={patient.avatarSrc} />
                    <Box className="patient-info">
                      <Typography variant="h6" component="div" className="user">
                        {patient.name}
                      </Typography>
                      <Typography variant="body2" className="regDate">
                        Date: {patient.date}
                      </Typography>
                      <Typography variant="body2" className="diagnosis">
                        {patient.diagnosis}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                    <Button size="small" variant="outlined" className="button1">
                      Scheduled meeting on the 12th of this month
                    </Button>
                    <Button size="small" variant="contained" className="view-more">
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};