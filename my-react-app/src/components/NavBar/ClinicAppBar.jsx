import * as React from 'react';
import { styled } from '@mui/material/styles';
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'elevation',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  borderBottom: 'none',
  boxShadow: 'none',
}));

export default function ClinicAppBar({ doctorId }) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const updateOpen = userAppStore((state) => state.updateOpen);
  const dopen = userAppStore((state) => state.dopen);
  const navigate = useNavigate();

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
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
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
            sx={{marginLeft:'21px'}}
          >
            Welcome Clinic
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }} className="box-item">
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => navigate('/clinic/booking-request')}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={() => navigate('/clinic/settings')}
            color="inherit"
          >
            <AccountCircle style={{ color: '#4c869a' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}