import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import './patientForm.css'; // Import external CSS file
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Button from "@mui/material/Button";

export default function PatientForm({ patient }) {
  const {
    id = '',
    firstName = '',
    lastName = '',
    email = '',
    phoneNumber = '',
    gender = '',
    dateOfBirth = '',
    placeOfBirth = '',
    age = '',
    height = '',
    weight = '',
    avatarSrc = '',
    healthHistory = {},
    familyHistory = {},
    doctorNotes = {}
  } = patient || {};

  return (
    <Box className="patient-form" >
      <Paper className="form-container">
        <Typography className="form-title">PATIENT CHART</Typography>
        
        {/* Personal Information Section */}
        <Box className="section personal-info" >
          <Typography variant="h6" className="section-title">Personal Information</Typography>
          <Box className="personal-info-container" style={{ border: '1px solid #ccc', padding: '10px' }}>
           <Box className="personal-info-content">
            <Avatar className="avatar" src={avatarSrc} />
            <Box className="info-fields">
              <Form.Group className="mb-3" controlId="formId">
                <Form.Label className='label' style={{paddingRight:'80px'}}>ID:</Form.Label>
                <Form.Control type="text" placeholder="ID" value={id} readOnly className="info-input" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label className='label' style={{paddingRight:'25px'}}>First Name:</Form.Label>
                <Form.Control type="text" placeholder="First Name" value={firstName} readOnly className="info-input" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label className='label' style={{paddingRight:'25px'}}>Last Name:</Form.Label>
                <Form.Control type="text" placeholder="Last Name" value={lastName} readOnly className="info-input" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className='label'style={{paddingRight:'60px'}}>Email:</Form.Label>
                <Form.Control type="email" placeholder="Email" value={email} readOnly className="info-input" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhoneNumber">
                <Form.Label className='label'>Phone Number:</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" value={phoneNumber} readOnly className="info-input" />
              </Form.Group>
            </Box>
          </Box>
       

        {/* Additional Information Section */}
        <Box className="section additional-info">
          <Box className="additional-info-grid">
            <Form.Group className="mb-3" controlId="formGender">
              <Form.Label className='label'>Gender:</Form.Label>
              <Form.Control type="text" placeholder="Gender" value={gender} readOnly className="info-input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDateOfBirth">
              <Form.Label className='label'>Date of Birth:</Form.Label>
              <Form.Control type="text" placeholder="Date of Birth" value={dateOfBirth} readOnly className="info-input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlaceOfBirth">
              <Form.Label className='label'>Place of Birth:</Form.Label>
              <Form.Control type="text" placeholder="Place of Birth" value={placeOfBirth} readOnly className="info-input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
              <Form.Label className='label'>Age:</Form.Label>
              <Form.Control type="text" placeholder="Age" value={age} readOnly className="info-input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHeight">
              <Form.Label className='label'>Height (in cm):</Form.Label>
              <Form.Control type="text" placeholder="Height" value={height} readOnly className="info-input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formWeight">
              <Form.Label className='label'>Weight (in kg):</Form.Label>
              <Form.Control type="text" placeholder="Weight" value={weight} readOnly className="info-input" />
            </Form.Group>
          </Box>
          </Box>
         </Box>
        </Box>

        {/* Personal Health History Section */}
        <Box className="section health-history">
          <Typography variant="h6" className="section-title">Personal Health History</Typography>
          <Box className="health-history-content" style={{ border: '1px solid #ccc', padding: '10px' }}>
            <Typography className='label'>Previous health-related concerns:</Typography>
            <Form.Group className="big-inputFormGroup">
                  <Form.Control
                    name="healthConcerns"
                    as="textarea"
                    value={healthHistory.concerns || 'N/A'}
                    className="big-input"
                    readOnly 
                  />
                </Form.Group>
            <Typography className='label'>Previous medication:</Typography>
            <Form.Group className="big-inputFormGroup">
            <Form.Control
                name="healthConcerns"
                as="textarea"
                value={healthHistory.concerns || 'N/A'}
                readOnly
                className="big-input"
               />
            </Form.Group>
            <Typography className='label'>Notes:</Typography>
            <Form.Group className="big-inputFormGroup">
                  <Form.Control
                    name="healthConcerns"
                    as="textarea"
                    value={healthHistory.concerns || 'N/A'}
                    className="big-input"
                    readOnly 
                  />
                </Form.Group>
          </Box>
        </Box>

        {/* Family's Health History Section */}
        <Box className="section family-history">
          <Typography variant="h6" className="section-title">Family's Health History</Typography>
          <Box className="family-history-content" style={{ border: '1px solid #ccc', padding: '10px' }}>
            <Typography className='label'>Previous health-related concerns:</Typography>
            <Form.Group className="big-inputFormGroup">
                  <Form.Control
                    name="healthConcerns"
                    as="textarea"
                    value={healthHistory.concerns || 'N/A'}
                    className="big-input"
                    readOnly 
                  />
                </Form.Group>
            <Typography className='label'>Previous medication: </Typography>
            <Form.Group className="big-inputFormGroup">
                  <Form.Control
                    name="healthConcerns"
                    as="textarea"
                    value={healthHistory.concerns || 'N/A'}
                    className="big-input"
                    readOnly 
                  />
                </Form.Group>
            <Typography className='label'>Notes: </Typography>
            <Form.Group className="big-inputFormGroup">
                  <Form.Control
                    name="healthConcerns"
                    as="textarea"
                    value={healthHistory.concerns || 'N/A'}
                    className="big-input"
                    readOnly 
                  />
                </Form.Group>
          </Box>
        </Box>

        {/* Doctor's Notes Section */}
        <Box className="section doctor-notes">
          <Typography variant="h6" className="section-title">Doctor’s Notes</Typography>
          <Typography  className='doc-name'>Dr Filan Fisteku</Typography>
          <Box className="doctor-notes-content" style={{ border: '1px solid #ccc', padding: '10px' }}>
            <Typography className='label'>Physical Exam: </Typography>
            <Form.Group className="big-inputFormGroup">
                  <Form.Control
                    name="healthConcerns"
                    as="textarea"
                    value={healthHistory.concerns || 'N/A'}
                    className="big-input"
                    
                  />
                </Form.Group>
            <Typography className='label'>Diagnosis: </Typography>
            <Form.Group className="big-inputFormGroup">
                  <Form.Control
                    name="healthConcerns"
                    as="textarea"
                    value={healthHistory.concerns || 'N/A'}
                    className="big-input"
                    
                  />
                </Form.Group>
            <Typography className='label'>Plan: </Typography>
            <Form.Group className="big-inputFormGroup">
                  <Form.Control
                    name="healthConcerns"
                    as="textarea"
                    value={healthHistory.concerns || 'N/A'}
                    className="big-input"
                     
                  />
                </Form.Group>
            <Typography className='label'>Tests: </Typography>
            <Form.Group className="big-inputFormGroup">
                  <Form.Control
                    name="healthConcerns"
                    as="textarea"
                    value={healthHistory.concerns || 'N/A'}
                    className="big-input"
                   
                  />
                </Form.Group>
          </Box>
          <Box className="button-container">
                <Button
                    className="button"
                    variant="contained"
                >
                    Save
                </Button>
          </Box>
          
          
        </Box>
        
      </Paper>
    </Box>
  );
}