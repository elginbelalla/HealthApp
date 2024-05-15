import DoctorNavbar from "../../../components/NavBar/DoctorNavbar";
import React,  { useState, useEffect } from "react";
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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useLocation  } from "react-router-dom";


export default function DoctorPatients() {
  
  const location = useLocation();
  const doctorId = location.state ? location.state.id : null;;
  console.log(doctorId);


  /*const patients = [
    { name: 'John Doe', date: '2024-05-03', diagnosis: 'Death', avatarSrc: '/path_to_avatar_image.jpg' },
    { name: 'John Doe', date: '2024-05-03', diagnosis: 'Death', avatarSrc: '/path_to_avatar_image.jpg' },
    { name: 'John Doe', date: '2024-05-03', diagnosis: 'Death', avatarSrc: '/path_to_avatar_image.jpg' },
    { name: 'John Doe', date: '2024-05-03', diagnosis: 'Death', avatarSrc: '/path_to_avatar_image.jpg' },
    // Add more patient data as needed
  ];*/

  const [open, setOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() =>{
    fetchData();
  }, []);

  const fetchData = async () =>{
    try {

      const response = await fetch(`http://localhost/HealthApp/api/getPatients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: doctorId }), 
      });

      if (response.ok) {
        const data = await response.json();
          setPatients(data);
          setFilteredPatients(data);
      } else {
        console.error("Failed to fetch previous data: bad res", await response.text());
      }
    } catch (error) {
      console.error("Failed to fetch previous data: db", error.message);
    }
  }
  const handleClickOpen = (patient) => {
    setSelectedPatient(patient);
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filteredPatients = patients.filter((patient) =>
      patient.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPatients(filteredPatients);
  };
 
  return (
    <>  
      <DoctorAppBar />
      <Box height={60} />
      <Box sx={{ display: 'flex' }}>
        <DoctorNavbar
            id={doctorId}
            />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Paper className="body-container">
            <SearchPatientBar
              onSearch={handleSearch}
             />
            <Box className="card-container">
              {filteredPatients.map((patient, index) => (
                <Card className="patient-card" key={index}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar className="avatar" alt="User Avatar" src={patient.avatarSrc} />
                    <Box className="patient-info">
                      <Typography variant="h6" component="div" className="user">
                        {patient.clientName}
                      </Typography>
                      <Typography variant="body2" className="regDate">
                        Date: {patient.dateOfBirth}
                      </Typography>
                      <Typography variant="body2" className="diagnosis">
                        {patient.diagnosis}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                    
        
                    <Button 
                    size="small"
                    variant="contained" 
                    className="view-more"
                    onClick={() => handleClickOpen(patient)}>
                      View Details
                    </Button>

                  </CardActions>
                </Card>
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
      {/* Patient Details Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Patient Details</DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="scroll-dialog-description">
            {/* Display patient details here */}
            {selectedPatient && (
              <>
                <Typography gutterBottom>Name: {selectedPatient.clientName}</Typography>
                <Typography gutterBottom>Date: {selectedPatient.dateOfBirth}</Typography>
                <Typography gutterBottom>Diagnosis: {selectedPatient.diagnosis}</Typography>
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};