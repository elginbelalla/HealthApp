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

const TestList = () => {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    // Simulated data for demonstration
    const initialRows = [
      { id: '1', user: 'Lea Kda', testType: 'Blood smth', reqDate: '10-20-2024', doc: '' },
      // Add more rows as needed...
    ];
    setRows(initialRows);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleUpload = (id) => (event) => {
    const file = event.target.files[0];
    // Perform file upload logic here (e.g., send file to backend)
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, doc: file.name } : row
    );
    setRows(updatedRows);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography className='title' gutterBottom variant='h5' component="div" sx={{ padding: "20px" }}>
        Test Request List
      </Typography>
      <SearchTestBar />
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.user}</TableCell>
                <TableCell align="center">{row.testType}</TableCell>
                <TableCell align="center">{row.reqDate}</TableCell>
                <TableCell align="center">{row.doc}</TableCell>
                <TableCell align="center">
                 <Box className="button-container">
                  <Button component="label" variant="contained" className='upload' >
                    Upload
                    <Input
                      type="file"
                      style={{ display: 'none' }}
                      onChange={handleUpload(row.id)}
                    />
                  </Button>
                  <Button component="label" variant="contained" className='submit'>
                    Submit
                    <Input
                      type="file"
                      style={{ display: 'none' }}
                      onChange={handleUpload(row.id)}
                    />
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

export default TestList;