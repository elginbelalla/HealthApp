import React, { useState, useEffect } from 'react';
import ClinicNavbar from '../../components/NavBar/ClinicNavbar';
import Box from '@mui/material/Box';
import ClinicAppBar from '../../components/NavBar/ClinicAppBar';
import './clinic.css';
import './clinicdashboard.css';
import Paper from '@mui/material/Paper';
import { CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

export default function ClinicDashboard() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Example: replace with actual API call
      const data = [
        { id: '1', user: 'John Doe', doctor: 'Dr. Smith', startTime: '10:00 AM', endTime: '11:00 AM', reqDate: '2023-05-20' },
        { id: '2', user: 'Jane Doe', doctor: 'Dr. Adams', startTime: '11:00 AM', endTime: '12:00 PM', reqDate: '2023-05-21' },
        // Add more data as needed
      ];
      setRows(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="clinic-body">
        <ClinicAppBar />
        <Box height={60} />
        <Box sx={{ display: 'flex' }}>
          <ClinicNavbar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Paper className="body-container">
              <div className="upper-container">
                <div className="element" id="element1">
                  <Typography className='clinic-label'>Number of Doctors</Typography>
                  <Card className='card'>
                    <CardContent className='card-content'>
                      23
                    </CardContent>
                  </Card>
                </div>
                <div className="element" id="element2">
                  <Typography className='clinic-label'>Number of Patients</Typography>
                  <Card className='card'>
                    <CardContent className='card-content'>
                      23
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="element" id="element3">
                <Typography className='clinic-label'>Recent Booking Requests</Typography>
                <TableContainer className='table-req'>
                  <Table>
                    <TableHead className='table-head'>
                      <TableRow>
                        <TableCell className='cell-title' align="center">Patient ID</TableCell>
                        <TableCell className='cell-title' align="center">Patient</TableCell>
                        <TableCell className='cell-title' align="center">Doctor</TableCell>
                        <TableCell className='cell-title' align="center">Time</TableCell>
                        <TableCell className='cell-title' align="center">Request Date</TableCell>
                        <TableCell className="action-column" align="center">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.slice(0, 10).map((row) => (
                        <TableRow key={row.id}>
                          <TableCell align="center">{row.id}</TableCell>
                          <TableCell align="center">{row.user}</TableCell>
                          <TableCell align="center">{row.doctor}</TableCell>
                          <TableCell align="center">{`${row.startTime} - ${row.endTime}`}</TableCell>
                          <TableCell align="center">{row.reqDate}</TableCell>
                          <TableCell align="center" className="action-column">
                            <Box className="clinic-button-container">
                              <Button component="label" variant="contained" className='accept'>
                                Accept
                              </Button>
                              <Button component="label" variant="contained" className='decline'>
                                Decline
                              </Button>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Paper>
          </Box>
        </Box>
      </div>
    </>
  );
}