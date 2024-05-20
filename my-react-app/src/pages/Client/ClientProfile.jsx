import React, { useState } from "react";
import { Box, Avatar, Button, FormControl, FormLabel, Grid, TextField } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import '../Client/profile.css';

export default function ClientProfile() {
    const initialClientProfile = {
        name: "John Doe",
        occupation: "Engineer",
        email: "johndoe@example.com",
        phoneNumber: "123-456-7890",
        address: "123 Main St, City, Country",
        profileInformation: "Additional profile information...",
    };

    const labelMapping = {
        name: "Name",
        occupation: "Occupation",
        email: "Email",
        phoneNumber: "Phone Number",
        address: "Address",
        profileInformation: "Profile Information",
    };

    const [clientProfile, setClientProfile] = useState(initialClientProfile);
    const [editableProfile, setEditableProfile] = useState({ ...initialClientProfile });
    const [avatarImage, setAvatarImage] = useState("/path_to_avatar_image.jpg");

    const handleSave = () => {
        setClientProfile({ ...editableProfile });
        console.log("Saving client profile:", editableProfile);
    };

    const handleInputChange = (field, value) => {
        setEditableProfile((prevProfile) => ({
            ...prevProfile,
            [field]: value,
        }));
    };

    const handleAvatarChange = (e) => {
        const newAvatar = URL.createObjectURL(e.target.files[0]);
        setAvatarImage(newAvatar);
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
                    alt="Client Avatar"
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
                {Object.entries(initialClientProfile).map(([field]) => (
                    <Grid item xs={12} md={field === "profileInformation" ? 12 : 6} key={field}>
                        <FormControl fullWidth>
                            <FormLabel className="label">
                                {labelMapping[field]}
                            </FormLabel>
                            <TextField
                                className="input-text"
                                value={editableProfile[field]}
                                onChange={(e) => handleInputChange(field, e.target.value)}
                                variant="outlined"
                                fullWidth
                                multiline={field === "profileInformation"}
                                rows={field === "profileInformation" ? 4 : 1}
                                placeholder={editableProfile[field] === initialClientProfile[field] ? labelMapping[field] : ""}
                                InputLabelProps={{ shrink: true }}
                            />
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
