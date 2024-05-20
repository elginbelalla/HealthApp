import ClinicNavbar from "../../../components/NavBar/ClinicNavbar";
import React from "react";
import Box from '@mui/material/Box';
import ClinicAppBar from "../../../components/NavBar/ClinicAppBar";
import Paper from '@mui/material/Paper';
import List from "./List";


export default function ClinicSettings() {
  return (
    <div className="clinic-body">
      <ClinicAppBar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <ClinicNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Paper className="body-container">
            <List />
          </Paper>
        </Box>
      </Box>
    </div>
  );
}