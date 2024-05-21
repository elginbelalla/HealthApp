import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Grid from "@mui/material/Grid";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import './profile.css'

export default function DoctorProfile({ doctorId }) {

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
  const [avatarImage, setAvatarImage] = useState("/path_to_avatar_image.jpg"); // State for avatar image
  
    useEffect(() => {
      fetchDoctorProfile(); 
  }, [doctorId]);

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

  
    const handleInputChange = (field, value) => {
      setEditableProfile((prevProfile) => ({
        ...prevProfile,
        [field]: value,
      }));
    };

    const handleAvatarChange = (e) => {
      // Handle avatar image change when a new image is selected
      const file = e.target.files[0];
      if (file) {
        const newAvatar = URL.createObjectURL(file);
        setAvatarImage(newAvatar);
      }
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
      <Box className="avatar-space">
          <Avatar
            sx={{ width: 120, height: 120 }}
            alt="Doctor Avatar"
            src={avatarImage}
          />
          <label htmlFor="avatar-input" className="edit-icon">
            <EditOutlinedIcon />
          </label>
          <input
            id="avatar-input"
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </Box>
      <Grid container spacing={2} sx={{ width: "100%" }}>
      {Object.entries(editableProfile).map(([field, value]) => (
          <Grid item xs={12} md={field === "profileInformation" ? 12 : 6} key={field}>
            <FormControl fullWidth>
              <FormLabel className="label">{field.charAt(0).toUpperCase() + field.slice(1)}</FormLabel>
              {field === "clinic" ? (
                <Input
                  className="input-text"
                  placeholder={`Enter ${field}`}
                  value={value || ''}
                  readOnly
                  disabled
                />
              ) : (
                <Input
                  className="input-text"
                  placeholder={`Enter ${field}`}
                  value={editableProfile[field] || ''}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                />
              )}
            </FormControl>
          </Grid>
        ))}
        <Grid item xs={12} sx={{ textAlign: "right" }}>
          <Button  className="button" variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
    );
  }