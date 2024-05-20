import ClinicNavbar from '../../components/NavBar/ClinicNavbar';
import Box from '@mui/material/Box';
import ClinicAppBar from '../../components/NavBar/ClinicAppBar';
import './clinic.css'
import Paper from '@mui/material/Paper';




export default function ClinicDashboard (){

  return(
    <>
    <div className="clinic-body">
    <ClinicAppBar/>
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <ClinicNavbar/>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <Paper className="body-container">
         <div>Clinic</div>
      </Paper>
      </Box>
    </Box>
    </div>
    </>
  )
};
