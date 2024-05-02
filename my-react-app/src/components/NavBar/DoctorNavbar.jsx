import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useLocation, useNavigate } from "react-router-dom";
import { userAppStore } from '../../appStore';
import './doctorNavbar.css';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsInputComponentOutlinedIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';


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

export default function DoctorNavbar() {
  const theme = useTheme();
  //const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // Add useLocation hook

  const open = userAppStore((state)=> state.dopen);

  const isActive = (path) => location.pathname === path;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Box height={10} />
      <Drawer variant="permanent" open={open}>
         <DrawerHeader>
        
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem  
            disablePadding 
            className={isActive("/doctor/dashboard") ? "selectedListItem" : "unselectedListItem"}
            onClick={() => navigate("/doctor/dashboard")}
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
                  }}
                >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 , fontFamily: 'Poppins, sans-serif'}} className='menuItem' />
              </ListItemButton>
            </ListItem>

            <ListItem  
            disablePadding 
            className={isActive("/doctor/patients") ? "selectedListItem" : "unselectedListItem"}
            onClick={() => navigate("/doctor/patients")}
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
                  }}
                >
                  <BadgeOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary="Patients" sx={{ opacity: open ? 1 : 0, fontFamily: 'Poppins, sans-serif' }} className='menuItem'/>
              </ListItemButton>
            </ListItem>


            <ListItem  
            disablePadding 
            className={isActive("/doctor/appointments") ? "selectedListItem" : "unselectedListItem"}
            onClick={() => navigate("/doctor/appointments")}
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
                  }}
                >
                  <CalendarMonthOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary="Appointments" sx={{ opacity: open ? 1 : 0, fontFamily: 'Poppins, sans-serif' }} className='menuItem'/>
              </ListItemButton>
            </ListItem>

            <ListItem  
            disablePadding 
            className={isActive("/doctor/tests") ? "selectedListItem" : "unselectedListItem"}
            onClick={() => navigate("/doctor/tests")}
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
                  }}
                >
                  <ContentPasteSearchOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary="Tests" sx={{ opacity: open ? 1 : 0, fontFamily: 'Poppins, sans-serif' }} className='menuItem'/>
              </ListItemButton>
            </ListItem>

            <ListItem  
            disablePadding 
            className={isActive("/doctor/messages") ? "selectedListItem" : "unselectedListItem"}
            onClick={() => navigate("/doctor/messages")}
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
                  }}
                >
                   <EmailOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary="Messages" sx={{ opacity: open ? 1 : 0, fontFamily: 'Poppins, sans-serif' }} className='menuItem'/>
              </ListItemButton>
            </ListItem>

            <ListItem  
            disablePadding 
            className={isActive("/doctor/settings") ? "selectedListItem" : "unselectedListItem"}
            onClick={() => navigate("/doctor/settings")}
            sx={{
              paddingTop: 10, // Adding padding to the top
              
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
                  }}
                >
                  <SettingsInputComponentOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0, fontFamily: 'Poppins, sans-serif' }} className='menuItem' />
              </ListItemButton>
            </ListItem>

            <ListItem  
            disablePadding 
            className={isActive("/") ? "selectedListItem" : "unselectedListItem"}
            onClick={() => navigate("/")}
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
                  }}
                >
                  <LogoutOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary="Log out" sx={{ opacity: open ? 1 : 0, fontFamily: 'Poppins, sans-serif' }} className='menuItem'/>
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
