import React from "react";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import './adminsecurity.css'

export default function AdminSecurity(){
   
    return(
        <Box className="body">
            <div className="header">Change Password</div>
            <Box className="form-container">
            <FormControl>   
             <FormLabel className="label">Current Password</FormLabel>
                <Input
                 className="input-text"
                 placeholder={`Password`}
                 sx={{ width: '300px' }}
                />
            </FormControl>
            
            <FormControl>  
            <FormLabel className="label">New Password</FormLabel>
                <Input
                 className="input-text"
                 placeholder={`New password`}
                 sx={{ width: '300px' }}
                />
                </FormControl>
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
    )
}