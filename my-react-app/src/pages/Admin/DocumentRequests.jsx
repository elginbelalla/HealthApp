import AdminNavbar from "../../components/NavBar/AdminNavbar";
import React from "react";
import Box from '@mui/material/Box';
import AdminAppBar from '../../components/NavBar/AdminAppBar';
import DocumentsList from "./DocumentsList";
import './doc.css';

export default function ClinicBookRequests() {
  return (
    <div className="clinic-body">
      <AdminAppBar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <AdminNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DocumentsList className="table" />
        </Box>
      </Box>
    </div>
  );
}