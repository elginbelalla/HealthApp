import React, { useEffect, useState }  from "react";
import Box from '@mui/material/Box';
import ClinicAppBar from "../../../components/NavBar/ClinicAppBar";
import ClinicNavbar from "../../../components/NavBar/ClinicNavbar";
import Paper from '@mui/material/Paper';
import { useLocation  } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PatientForm from "../../Doctor/Doctor Patient/DoctorPatientForm";
import SearchPatientBar from "../../Doctor/Doctor Patient/PatientBar";
import './profile.css'


export default function DoctorDetails  ({ doctorId }){

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


    const [doctorProfile, setDoctorProfile] = useState({
        name: '',
        specialty: '',
        email: '',
        phoneNumber: '',
        clinic: '',
        address: '',
        profileInformation: '',
      });
      const [editableProfile, setEditableProfile] = useState({
        name: '',
        specialty: '',
        email: '',
        phoneNumber: '',
        clinic: '',
        address: '',
        profileInformation: '',
      });
    
    
      const fetchDoctorProfile = async () => {
        try {
            const response = await fetch(`http://localhost/HealthApp/api/getDoctorProfile`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id: doctorId }),
            });
    
            if (response.ok) {
                const data = await response.json();
                setDoctorProfile({
                  name: data.name,
                  specialty: data.specialty,
                  email: data.email,
                  phoneNumber: data.phoneNumber,
                  clinic: data.clinicName || '', 
                  address: data.address || '', 
                  profileInformation: data.profileInfo || '', 
                });
                setEditableProfile({
                  name: data.name,
                  specialty: data.specialty,
                  email: data.email,
                  phoneNumber: data.phoneNumber,
                  clinic: data.clinicName || '', 
                  address: data.address || '', 
                  profileInformation: data.profileInfo || '',
                });        } else {
                console.error("Failed to fetch doctor profile:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching doctor profile:", error);
        }
        };
    
    
        const handleSave = async () => {
          try{
    
            const response = await fetch(`http://localhost/HealthApp/api/setDoctorProfile`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ doctorId, editableProfile }),
            });
    
            if (response.ok) {
                const data = await response.json();
            } else {
                console.error("Failed to fetch doctor profile:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching doctor profile:", error);
        }
        };
      
  const location = useLocation();

  const id = location.state ? location.state.id : null;;

  console.log(id);

  return(
    <>
    <div className="doctor-body">
     <ClinicAppBar
    />
    <Box height={70} />
    <Box sx={{ display: 'flex' }}>
    <ClinicNavbar
    />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <Paper className="body-container">
       <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          minHeight: "100vh",
          padding: 4,
        }}
      > 
      <Box className="avatar-space">
          <Avatar
            sx={{ width: 120, height: 120 }}
            alt="Doctor Avatar"
          />
          <label htmlFor="avatar-input" className="edit-icon">
            <EditOutlinedIcon />
          </label>
          <input
            id="avatar-input"
            type="file"
            style={{ display: "none" }}
            accept="image/*"
          />
        </Box>
      <Grid container spacing={2} sx={{ width: "100%" }}>
      {Object.entries(editableProfile).map(([field, value]) => (
          <Grid item xs={12} md={field === "profileInformation" ? 12 : 6} key={field}>
            <FormControl fullWidth>
              <FormLabel className="label">{field.charAt(0).toUpperCase() + field.slice(1)}</FormLabel>
              {(
                <Input
                  className="input-text"
                  placeholder={`${field}`}
                  value={value || ''}
                  readOnly
                  disabled
                />
              )}
            </FormControl>
          </Grid>
           ))}
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
          </Grid>
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
  )
};


