import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { userAppStore } from '../../appStore';
import './doctorAppbar.css';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'elevation',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  borderBottom: 'none', // Remove the bottom border
  boxShadow: 'none', // Remove the shadow
}));



export default function DoctorAppBar({ doctorId }) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const updateOpen = userAppStore((state) => state.updateOpen);
  const dopen = userAppStore((state) => state.dopen);
  const navigate = useNavigate();
  const [doctorName, setDoctorName] = useState('');
  const [notificationCount, setNotificationCount] = useState('');


  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async () =>{
    try {

      const response = await fetch(`http://localhost/HealthApp/api/getAppBar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: doctorId }), 
      });

      if (response.ok) {
        const responseText = await response.text();
        try {
          const data = JSON.parse(responseText);
          setDoctorName(data.doctorName);
          setNotificationCount(data.labRequestsCount);

        } catch (jsonError) {
          console.error("Failed to parse JSON:", jsonError);
        }
      } else {
        console.error("Failed to fetch previous data: bad res", await response.text());
      }
    } catch (error) {
      console.error("Failed to fetch previous data: db", error.message);
    }
  };

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show {notificationCount} new notifications"
          color="inherit"
        >
          <Badge badgeContent={notificationCount} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{ height: '60px', background: 'transparent' }}>
        <Toolbar>
          <div className='logo-container'>
          <img
            className="logo"
            src='/logo.png'
            alt="Logo"
          />
          <span className='logoName'>MedInteract</span>
          </div>

          <Typography
            noWrap
            component="div"
            className = "pageIndicator"
          >
            Welcome Dr. {doctorName}
          </Typography>


          <Box sx={{ flexGrow: 1 }}/>
          
         
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} className='box-item' 
 >
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={() => navigate("/doctor/messages", {state: { id: doctorId }})}>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show {notificationCount} new notifications"
              color="inherit"
              onClick={() => navigate("/doctor/tests", {state: { id: doctorId }})}
              
            >
              <Badge badgeContent={notificationCount} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }} className='box-item'>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={() => navigate("/doctor/settings", {state: { id: doctorId }})}
            color="inherit"
          >
            <AccountCircle style={{color:'#4c869a'}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}

    </Box>
  );
}
