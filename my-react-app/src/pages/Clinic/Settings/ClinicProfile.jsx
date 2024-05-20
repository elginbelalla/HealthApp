import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Grid from "@mui/material/Grid";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import './profile.css';

export default function ClinicProfile() {
    const initialClinicProfile = {
      name: "John Doe",
      email: "johndoe@example.com",
      phoneNumber: "123-456-7890",
      address: "123 Main St, City, Country",
      profileInformation: "Additional profile information...",
    };
  
    const [clinicProfile, setClinicProfile] = useState(initialClinicProfile);
    const [editableProfile, setEditableProfile] = useState({ ...initialClinicProfile });
    const [avatarImage, setAvatarImage] = useState("/path_to_avatar_image.jpg"); // State for avatar image
  
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
          {Object.entries(initialClinicProfile).map(([field, value]) => (
            <Grid item xs={12} md={field === "profileInformation" ? 12 : 6} key={field}>
              <FormControl fullWidth>
                <FormLabel className="label">{field.charAt(0).toUpperCase() + field.slice(1)}</FormLabel>
                {field === "profileInformation" ? (
                  <Input
                    className="input-info-text"
                  />
                ) : (
                  <Input
                    className="input-text"
                    placeholder={`Enter ${field}`}
                    value={editableProfile[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                  />
                )}
              </FormControl>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: "right" }}>
            <Button className="button" variant="contained" onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
}