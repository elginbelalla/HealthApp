import ClinicNavbar from "../../../components/NavBar/ClinicNavbar";
import React from "react";
import Box from '@mui/material/Box';
import ClinicAppBar from '../../../components/NavBar/ClinicAppBar';
import BookList from "./BookList";
import './clinicReq.css';

export default function ClinicBookRequests() {
  return (
    <div className="clinic-body">
      <ClinicAppBar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <ClinicNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <BookList className="table" />
        </Box>
      </Box>
    </div>
  );
}