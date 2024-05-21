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
import Input from '@mui/material/Input';
import SearchTestBar from './testBar';
import Box from '@mui/material/Box';
import './testList.css'


const columns = [
  { id: 'id', label: 'Patient ID', minWidth: 50 },
  { id: 'user', label: 'User', minWidth: 130 },
  { id: 'testType', label: 'Test Type', minWidth: 100 },
  { id: 'reqDate', label: 'Request Date', minWidth: 100 },
  { id: 'doc', label: 'Document', minWidth: 100 },
  { id: 'actions', label: 'Actions', minWidth: 100 },
];

const TestList = ({doctorId}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [tests, setTests] = useState([]);
  const [filteredTests, setFilteredTests] = useState([]);
  const [file, setFile] = useState(null);
  const [sortMode, setSortMode] = useState('name');

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
      setFilteredTests(Array.isArray(data) ? data : []); 
    } else {
      console.error("Failed to fetch previous data: bad res", await response.text());
    }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [doctorId, sortMode]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
  
  const handleSort = (mode) => {
    setSortMode(mode);
    const sortedTests = sortTests([...filteredTests], mode);
    setFilteredTests(sortedTests);
  };

  const sortTests = (patientsArray, mode) => {
    if (mode === 'name') {
      return patientsArray.sort((a, b) => a.name.localeCompare(b.name));
    } else if (mode === 'date') {
      return patientsArray.sort((a, b) => new Date(b.requestDate) - new Date(a.requestDate));
    }
    return patientsArray;
  };
  
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography className='title' gutterBottom variant='h5' component="div" sx={{ padding: "20px" }}>
        Test Request List
      </Typography>
      <SearchTestBar
      onSearch={handleSearch}
      onSort={handleSort}
       />
      <TableContainer sx={{ maxHeight: 440, paddingLeft: "30px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align="center" style={{ minWidth: column.minWidth,  color: '#959494'}}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTests.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((test) => (
              <TableRow key={test.tableResultListId}>
                <TableCell align="center">{test.clientId}</TableCell>
                <TableCell align="center">{test.name}</TableCell>
                <TableCell align="center">{test.testType}</TableCell>
                <TableCell align="center">{test.requestDate}</TableCell>
                <TableCell align="center">{test.arrivalDate}</TableCell>
                <TableCell align="center">
                 <Box className="test-button-container">
                  <Button component="label" variant="contained" className='upload' >
                    Upload
                    <Input
                      type="file"
                      style={{ display: 'none' }}
                      onChange={(event) => setFile(event.target.files[0])}
                      />
                  </Button>
                  <Button component="label" variant="contained" className='submit' onClick={() => handleUpload(test.tableResultListId)} disabled={!file}>
                    Submit
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
        count={filteredTests.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TestList;