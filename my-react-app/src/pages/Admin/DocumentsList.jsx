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
import SearchBookBar from './docRequestBar';
import './documentsList.css';

const columns = [
  { id: 'id', label: 'ID', minWidth: 50, className: 'id-column' },
  { id: 'user', label: 'Doctor/Clinic', minWidth: 130 },
  { id: 'document', label: 'Document', minWidth: 100 }
];

const DocumentsList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: '1', user: 'John Doe', documentLink: 'http://example.com/doc1', reqDate: '2023-05-20' },
        { id: '2', user: 'Jane Doe', documentLink: 'http://example.com/doc2', reqDate: '2023-05-21' },
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
        Uploaded Documents
      </Typography>
      <SearchBookBar />
      <TableContainer sx={{ maxHeight: 440, paddingLeft: "30px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align="center" style={{ minWidth: column.minWidth, color: '#959494' }} className="table-header-cell">
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center" className='id-column'>{row.id}</TableCell>
                <TableCell align="center">{row.user}</TableCell>
                <TableCell align="center">
                  <a href={row.documentLink} target="_blank" rel="noopener noreferrer">View document</a>
                </TableCell>
                <TableCell align="center">
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

export default DocumentsList;
