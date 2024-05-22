import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useLocation } from 'react-router-dom';
import DoctorAppBar from '../../../components/NavBar/DoctorAppBar';
import DoctorNavbar from '../../../components/NavBar/DoctorNavbar';
import SearchPatientBar from './PatientBar';
import '../doc_style.css'
import PatientForm from './DoctorPatientForm'; // Import the new PatientForm component
import './patient.css'; // Import external CSS file

export default function DoctorPatients() {
  const location = useLocation();
  const doctorId = location.state ? location.state.id : null;
  console.log(doctorId);

  const [open, setOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortMode, setSortMode] = useState('name');

  useEffect(() => {
    fetchData();
  }, [sortMode]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost/HealthApp/api/getPatients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: doctorId }),
      });

      if (response.ok) {
        const data = await response.json();
        setPatients(data);
        setFilteredPatients(data);
        const sortedData = sortPatients(data, sortMode);
      } else {
        console.error('Failed to fetch previous data: bad res', await response.text());
      }
    } catch (error) {
      console.error('Failed to fetch previous data: db', error.message);
    }
  };

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

  const handleSort = (mode) => {
    setSortMode(mode);
    const sortedPatients = sortPatients([...filteredPatients], mode);
    setFilteredPatients(sortedPatients);
  };

  const sortPatients = (patientsArray, mode) => {
    if (mode === 'name') {
      return patientsArray.sort((a, b) => a.clientName.localeCompare(b.clientName));
    } else if (mode === 'date') {
      return patientsArray.sort((a, b) => new Date(b.dateOfBirth) - new Date(a.dateOfBirth));
    }
    return patientsArray;
  };

  return (
    <>
    <div className="doctor-body">
    <DoctorAppBar
      doctorId={doctorId}
    />
    <Box height={60} />
      <Box sx={{ display: 'flex' }}>
        <DoctorNavbar id={doctorId} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Paper className="body-container">
            <SearchPatientBar onSearch={handleSearch} onSort ={handleSort}/>
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
                  
                  <CardActions sx={{ display: 'flex', justifyContent:'flex-end', marginTop: 'auto' }}>
                    <Button
                      size="small"
                      variant="contained"
                      className="view-more"
                      onClick={() => handleClickOpen(patient)}
                    >
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
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"

        PaperProps={{
          style: {
            overflow: 'hidden' // Hide scrollbar
          }
        }}
      >
        <DialogContent dividers >
          <DialogContentText id="scroll-dialog-description">
            {selectedPatient && (
              <PatientForm patient={selectedPatient} onClose={handleClose} />
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      </div>
    </>
  );
}