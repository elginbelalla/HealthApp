import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from "react-router-dom";
import { userAppStore } from '../../appStore';
import './doctorNavbar.css';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsInputComponentOutlinedIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
      backgroundColor: 'transparent', // Set the background color of the paper to transparent
      ...(open && openedMixin(theme)),
      ...(!open && closedMixin(theme)),
    },
  }),
);

export default function DoctorNavbar({id}) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const open = userAppStore((state) => state.dopen);

  const isActive = (path) => location.pathname === path;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Box height={10} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader />
        <Divider />
        <List>
          {[
            { path: '/doctor/dashboard', icon: < HomeOutlinedIcon /> },
            { path: '/doctor/patients', icon: <BadgeOutlinedIcon /> },
            { path: '/doctor/appointments', icon: <CalendarMonthOutlinedIcon /> },
            { path: '/doctor/tests', icon: <ContentPasteSearchOutlinedIcon /> },
            { path: '/doctor/messages', icon: <EmailOutlinedIcon /> },
            { path: '/doctor/settings', icon: <SettingsInputComponentOutlinedIcon /> },
            { path: '/', icon: <LogoutOutlinedIcon /> },
          ].map((item, index) => (
            <ListItem
              key={item.path}
              disablePadding
              className={isActive(item.path) ? "selectedListItem" : "unselectedListItem"}
              onClick={() => navigate(item.path, {state: { id: id }})}
              sx={{
                marginBottom: index == 4 ? '26px' : '0', // Add extra margin to items from index 5 onwards
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: isActive(item.path) ? '#FFFFFF' : '#388192', // Set icon color based on active state
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.path === '/' ? "Log out" : item.path.replace('/doctor/', '').replace(/^\w/, (c) => c.toUpperCase())}
                  sx={{
                    opacity: open ? 1 : 0,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                  className='menuItem'
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}