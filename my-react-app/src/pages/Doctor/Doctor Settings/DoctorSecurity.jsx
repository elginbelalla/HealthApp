import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import './docsecurity.css'

export default function DoctorSecurity({ doctorId }){
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
   
    const validateForm = () =>{
        if (currentPassword.length === 0 || newPassword.length === 0) {
            alert("Please fill in all fields.");
            return false;
          }
        else if (newPassword.length <= 7){
            alert("Please make sure the password is 8 or more characters long.")
            return false;
        }
        else 
          return true;
    }

    const handleSave = async () => {

        if (!validateForm()) {
            return;
          }

        try {
          const response = await fetch(`http://localhost/HealthApp/api/setDoctorSecurity`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ doctorId, currentPassword, newPassword }),
          });
    
          if (response.ok) {
            const data = await response.json();
            setCurrentPassword('');
            setNewPassword('');
            alert("Password changed successfully");
          } else {
            const errorData = await response.json();
            alert(errorData.error || "Failed to change password");
        }
        } catch (error) {
            console.error("Error changing password:", error);
            alert("Error changing password");        }
      };

    return(
        <Box className="body">
            <div className="header">Change Password</div>
            <Box className="form-container">
            <FormControl>   
             <FormLabel className="label">Current Password</FormLabel>
                <Input
                 className="input-text"
                 placeholder={`password`}
                 value={currentPassword}
                 onChange={(e) => setCurrentPassword(e.target.value)}
                 sx={{ width: '300px' }}
                />
            </FormControl>
            
            <FormControl>  
            <FormLabel className="label">New Password</FormLabel>
                <Input
                 className="input-text"
                 placeholder={`password`}
                 value={newPassword}
                 onChange={(e) => setNewPassword(e.target.value)}
                 sx={{ width: '300px' }}
                />
                </FormControl>
            </Box>

            <Box className="button-container">
                <Button
                    className="button"
                    variant="contained"
                    onClick={handleSave}
                >
                    Save
                </Button>
          </Box>
        </Box>
    )
}