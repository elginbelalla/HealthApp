import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '10px',
  backgroundColor: alpha(theme.palette.common.black, 0.05), // Lighter black background
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.05), // Slightly darker black on hover
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  height: 36,
  boxShadow: 'none',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:alpha(theme.palette.common.black, 0.5), // Black color for icon
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.black, // Black color for text
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
  '& .MuiInputBase-input:hover, & .MuiInputBase-input:focus': {
    backgroundColor: alpha(theme.palette.common.black, 0.05), // Lighter black background on hover/focus
  },
}));

export default function SearchTestBar({ onSearch, onSort }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleSortAtoZClick = () => {
      onSort('name');
      handleClose();
    };
  
    const handleSortByDateClick = () => {
      onSort('date');
      handleClose();
    };
  
    const handleSearchChange = (event) => {
      const searchTerm = event.target.value;
      onSearch(searchTerm);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: '#f3f2f2', color:'#202020'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
             <SortIcon
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            />
              <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
              'aria-labelledby': 'basic-button',
              }}
               >
                <MenuItem onClick={handleSortAtoZClick}>Sort A-Z</MenuItem>
                <MenuItem onClick={handleSortByDateClick}>Sort by date</MenuItem>
              </Menu>
          </IconButton>
          
          <Box sx={{ flexGrow: 1 }}/>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}