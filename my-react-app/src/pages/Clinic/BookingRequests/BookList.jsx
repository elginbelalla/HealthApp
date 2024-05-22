import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchBookBar from './bookRequestBar';
import './bookList.css';


const columns = [
  { id: 'id', label: 'Patient ID', minWidth: 50 , className:'id-column'},
  { id: 'user', label: 'Patient', minWidth: 130 },
  { id: 'doctor', label: 'Doctor', minWidth: 100 },
  { id: 'time', label: 'Time', minWidth: 100 },
  { id: 'reqDate', label: 'Request Date', minWidth: 100 },
  { id: 'actions', label: 'Actions', minWidth: 100 },
];

const BookList = () => {

  /*
  const [searchTerm, setSearchTerm] = useState('');
  const [tests, setTests] = useState([]);
  const [filteredTests, setFilteredTests] = useState([]);
  const [file, setFile] = useState(null);

  const fetchData = async () => {
    
    console.log(doctorId, "in testLis");
    try {
      
    const response = await fetch(`http://localhost/HealthApp/api/getTests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ doctorId: doctorId }), 
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Received data:", data);
      setTests(Array.isArray(data) ? data : []);
      setFilteredTests(Array.isArray(data) ? data : []); // Set filteredTests initially with the fetched data
    } else {
      console.error("Failed to fetch previous data: bad res", await response.text());
    }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [doctorId]);


  const handleUpload = async (testId) => {
    try {
      const formData = new FormData();
      formData.append('testId', testId);
      
    if (file) { 
      formData.append('file', file);
      const response = await fetch(`http://localhost/HealthApp/api/setTestFile`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const updatedTests = await response.json(); 
        setTests(Array.isArray(updatedTests) ? updatedTests : []);
        setFilteredTests(Array.isArray(updatedTests) ? updatedTests : []);
        fetchData();
      } else {
        console.error("Failed to upload file: bad res", await response.text());
      }
    } else {
      console.error("No file selected");
    }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
 

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filteredTests = tests.filter((test) =>
      test.name && test.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
    setFilteredTests(filteredTests);
  };
  
  const handleSort = (sortDirection) => {
    const sortedTests = [...tests].sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.clientId - b.clientId;
      } else {
        return b.clientId - a.clientId;
      }
    });
    
    setTests(sortedTests);
    const filteredTests = sortedTests.filter((test) =>
      test.name && test.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTests(filteredTests);
  };
   */

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Fetch booking requests here and update the state
    // For now, we use static data
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography className='title' gutterBottom variant='h5' component="div" sx={{ padding: "20px" }}>
        Booking Request List
      </Typography>
      <SearchBookBar
        // onSearch={handleSearch}
        // onSort={handleSort}
      />
      <TableContainer sx={{ maxHeight: 440, paddingLeft: "30px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align="center" style={{ minWidth: column.minWidth, color: '#959494' }}>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center" className='id-column'>{row.id}</TableCell>
                <TableCell align="center">{row.user}</TableCell>
                <TableCell align="center">{row.doctor}</TableCell>
                <TableCell align="center">{`${row.startTime} - ${row.endTime}`}</TableCell>
                <TableCell align="center">{row.reqDate}</TableCell>
                <TableCell align="center">
                  <Box className="clinic-button-container" >
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
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default BookList;