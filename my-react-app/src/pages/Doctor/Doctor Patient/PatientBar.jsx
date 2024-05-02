import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  borderRadius: '10px',
  backgroundColor: alpha('#CCCCCC', 0.1), // Very light grey background
  width: '100%',
  maxWidth: '20ch', // Max width for search input
  marginRight: theme.spacing(2), // Margin to separate search input and button
  height: 36,
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Shadow
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#52B2E2', // Search icon color
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary, // Grey text color
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchPatientBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent', color: '#202020' }}>
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} /> 
          <Button size="medium" variant="outlined" className="add-button">
            Add New Patient
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}