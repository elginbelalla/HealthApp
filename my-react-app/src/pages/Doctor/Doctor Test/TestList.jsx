import React, { useState } from 'react'; // Import useState from React
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import SearchTestBar from './testBar';



const columns = [
  { id: 'id', label: 'Patient ID', minWidth: 50 },
  { id: 'user', label: 'User', minWidth: 130 },
  { id: 'testType', label: 'Test Type', minWidth: 100 },
  { id: 'reqDate', label: 'Request Date', minWidth: 100 },
  { id: 'doc', label: 'Document', minWidth: 100 },
  { id: 'actions', label: 'Actions', minWidth: 100 },
]

function createData(id, user, testType, reqDate, doc, actions) {
  return { id, user, testType, reqDate, doc, actions};
}

const rows = [
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  createData('1', 'Lea Kda','Blood smth', '10-20-2024', 'doc'),
  
];

const TestList = () => {
  const [page, setPage] = useState(0); // Use useState within a functional component
  const [rowsPerPage, setRowsPerPage] = useState(5); // Use useState within a functional component

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
     <Typography 
      className='title'
      gutterBottom
      variant='h5'
      component="div"
      sx={{padding:"20px"}}>
        Test Request List
     </Typography>
      <SearchTestBar/>

      <TableContainer sx={{ maxHeight: 440, paddingLeft:"30px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
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

export default TestList; // Export the component as default

export { TestList }; // Also export the component for named exports if needed

/* this is code for when php connects
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

  useEffect(() => {
    // Simulated data for demonstration
    const initialRows = [
      { id: '1', user: 'Lea Kda', testType: 'Blood smth', reqDate: '10-20-2024', doc: '' },
      // Add more rows as needed...
    ];
    setRows(initialRows);
  }, []);

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
      <Typography gutterBottom variant="h5" component="div" sx={{ padding: '20px' }}>
        Test Request List
      </Typography>

      <TableContainer sx={{ maxHeight: 440, paddingLeft: '30px' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => {
                  if (column.id === 'actions') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Button component="label" variant="contained" color="primary">
                          Upload
                          <Input
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleUpload(row.id)}
                          />
                        </Button>
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {row[column.id]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TestList;*/