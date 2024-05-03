import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Grid from "@mui/material/Grid";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function DoctorProfile() {
    const initialDoctorProfile = {
      name: "John Doe",
      specialty: "Cardiologist",
      email: "johndoe@example.com",
      phoneNumber: "123-456-7890",
      clinic: "Cardio Clinic",
      address: "123 Main St, City, Country",
      profileInformation: "Additional profile information...",
    };
  
    const [doctorProfile, setDoctorProfile] = useState(initialDoctorProfile);
    const [editableProfile, setEditableProfile] = useState({ ...initialDoctorProfile });
  
    const handleSave = () => {
      // Perform save operation with editableProfile data
      console.log("Saving doctor profile:", editableProfile);
      // Example: You can send a request to your backend to save the data here
    };
  
    const handleInputChange = (field, value) => {
      setEditableProfile((prevProfile) => ({
        ...prevProfile,
        [field]: value,
      }));
    };
  
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          minHeight: "100vh",
          padding: 4,
        }}
      >
        <Avatar
          sx={{ width: 120, height: 120, marginBottom: 2, marginRight: 10 }}
          alt="Doctor Avatar"
          src="/path_to_avatar_image.jpg"
        />
      <Grid container spacing={2} sx={{ width: "100%" }}>
        {Object.entries(initialDoctorProfile).map(([field, value]) => (
          <Grid item xs={12} md={field === "profileInformation" ? 12 : 6} key={field}>
            <FormControl fullWidth>
              <FormLabel>{field.charAt(0).toUpperCase() + field.slice(1)}</FormLabel>
              {field === "clinic" ? (
                <Input
                  placeholder={`Enter ${field}`}
                  value={value}
                  readOnly
                  disabled
                />
              ) : (
                <Input
                  placeholder={`Enter ${field}`}
                  value={editableProfile[field]}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                />
              )}
            </FormControl>
          </Grid>
        ))}
        <Grid item xs={12} sx={{ textAlign: "right" }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
    );
  }