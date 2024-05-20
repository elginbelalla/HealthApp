import DoctorNavbar from "../../components/NavBar/DoctorNavbar";
import Box from '@mui/material/Box';
import DoctorAppBar from "../../components/NavBar/DoctorAppBar";
import './admin.css'
import Paper from '@mui/material/Paper';




export default function AdminDashboard (){

  return(
    <>
    <div className="admin-body">
    <DoctorAppBar />
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <DoctorNavbar />
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <Paper className="body-container">
         <div>Admin</div>
      </Paper>
      </Box>
    </Box>
    </div>
    </>
  )
};
