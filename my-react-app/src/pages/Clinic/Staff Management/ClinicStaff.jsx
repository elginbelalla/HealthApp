import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ClinicNavbar from '../../../components/NavBar/ClinicNavbar';
import ClinicAppBar from '../../../components/NavBar/ClinicAppBar';
import SearchStaffBar from './StaffBar';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import './staff.css'; // Import external CSS file
import { Stack } from 'react-bootstrap';

export default function StaffManagement() {
    const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate('/clinic/staffmanagement/doctor-details');
  };

  return (
    <>
    <div className="doctor-body">
      <ClinicAppBar />
      <Box height={60} />
      <Box sx={{ display: 'flex' }}>
        <ClinicNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Paper className="staff-body-container">
            <SearchStaffBar  />
            <Box className="card-container">
                <Card className="staff-card">
                  <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar className="avatar" alt="User Avatar" />
                    <Box className="staff-info">
                      <Typography variant="h5" component="div" className="user">
                         Name
                      </Typography>
                       <Box className="staff-position">
                        <PeopleAltOutlinedIcon className='staff-icon'/>
                        <Typography variant="body1" component="div" className="user">
                           Specialty
                        </Typography>
                        </Box>

                        <Box className="staff-position">
                        <EmailOutlinedIcon className='staff-icon'/>
                        <Typography variant="body1" className="user">
                           Email
                         </Typography>
                        </Box>
                    </Box>
                  </CardContent>
                  
                  <CardActions sx={{ display: 'flex', justifyContent:'flex-end', marginTop: 'auto' }}>
                    <Button
                      size="small"
                      variant="contained"
                      className="view-more"
                      onClick={handleViewDetails}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>

                
            </Box>
          </Paper>
        </Box>
      </Box>
      </div>
    </>
  );
}