import AdminNavbar from "../../components/NavBar/AdminNavbar";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import AdminAppBar from "../../components/NavBar/AdminAppBar";
import "./admin.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import Paper from "@mui/material/Paper";
import { BarChart } from "@mui/x-charts";
import { PieChart } from "@mui/x-charts/PieChart";
import "./dashboard.css";
import MasksIcon from "@mui/icons-material/Masks";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useNavigate, useLocation } from "react-router-dom";

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [labResults, setLabResults] = useState([]);
  const [patientsThisWeek, setPatientsThisWeek] = useState([]);
  const [numberOfHours, setNumberOfHours] = useState(0);
  const [ratings, setRatings] = useState([]);

  const location = useLocation();
  const id = location.state ? location.state.id : null;

  console.log(id);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost/HealthApp/api/getDashboard`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        }
      );

      if (response.ok) {
        const responseText = await response.text();
        console.log("Raw response text:", responseText);
        try {
          const data = JSON.parse(responseText);
          console.log("Received data:", data);

          setAppointments(data.appointments);
          setLabResults(data.labRequests);
          setPatientsThisWeek(data.patientCountThisWeek);
          const hours = data.patientCountThisWeek * 0.3;
          setNumberOfHours(hours);
          setRatings(data.ratings);
        } catch (jsonError) {
          console.error("Failed to parse JSON:", jsonError);
        }
      } else {
        console.error(
          "Failed to fetch previous data: bad res",
          await response.text()
        );
      }
    } catch (error) {
      console.error("Failed to fetch previous data: db", error.message);
    }
  };

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const dData = [3000, 4000, 5000, 6000, 7000, 8000, 9000];
  const xLabels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const totalRatingsCount = Object.values(ratings).reduce(
    (total, count) => total + count,
    0
  );
  const defaultRatings = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  const finalRatings = Object.keys(ratings).length ? ratings : defaultRatings;

  const chartData = Object.keys(finalRatings).map((rating, index) => ({
    label: `${rating} Stars`,
    value: (finalRatings[rating] / totalRatingsCount) * 100,
    color:
      index === 1
        ? "#5F9EA0"
        : index === 2
        ? "#FF8042"
        : index === 3
        ? "#FFBB28"
        : index === 4
        ? "#00C49F"
        : "#0088FE",
  }));

  return (
    <>
      <div className="doctor-body">
        <AdminAppBar doctorId={id} />
        <Box height={60} />
        <Box sx={{ display: "flex" }}>
          <AdminNavbar id={id} />
          <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
            <Paper className="body-container">
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Stack direction={"row"}>
                    <Card
                      sx={{ maxWidth: 700, height: "20vh" }}
                      className="card"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          component="div"
                          className="sub-title"
                        >
                          Monthly Earnings
                        </Typography>
                        <CardContent className="sub-card">
                          <Stack direction={"row"} spacing={2}>
                            <MonetizationOnIcon
                              sx={{
                                fontSize: 40,
                                color: "rgba(82, 178, 226, 0.7)",
                              }}
                            />
                            <Typography
                              variant="h4"
                              sx={{ marginLeft: "16px" }}
                            >
                              $2000
                            </Typography>
                            <div className="card-text">
                              <span className="num-hours">{numberOfHours}</span>
                              <span className="ev-patients"></span>
                            </div>
                          </Stack>
                        </CardContent>
                      </CardContent>
                    </Card>

                    <Card
                      sx={{ maxWidth: 700, height: "20vh" }}
                      className="card"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          component="div"
                          className="sub-title"
                        >
                          Yearly Earnings
                        </Typography>
                        <CardContent className="sub-card">
                          <Stack direction={"row"} spacing={2}>
                            <MonetizationOnIcon
                              sx={{
                                fontSize: 40,
                                color: "rgba(82, 178, 226, 0.7)",
                              }}
                            />
                            <Typography
                              variant="h4"
                              sx={{ marginLeft: "16px" }}
                            >
                              $50000
                            </Typography>
                            <div className="card-text">
                              <span className="num-hours">{numberOfHours}</span>
                              <span className="ev-patients"></span>
                            </div>
                          </Stack>
                        </CardContent>
                      </CardContent>
                    </Card>
                  </Stack>
                </Grid>

                <Grid item xs={5}>
                  <Stack direction={"column"}>
                    <Card
                      sx={{ maxWidth: 700, height: "20vh" }}
                      className="card"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          component="div"
                          className="sub-title"
                        >
                          Number of Patients This Week
                        </Typography>
                        <CardContent className="sub-card">
                          <Stack direction={"row"} spacing={2}>
                            <MasksIcon className="icon" />
                            <div className="card-text">
                              <span className="num-patients">
                                {patientsThisWeek}
                              </span>
                              <span className="ev-patients"></span>
                            </div>
                          </Stack>
                        </CardContent>
                      </CardContent>
                    </Card>

                    <Card
                      sx={{ maxWidth: 700, height: "20vh" }}
                      className="card"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          component="div"
                          className="sub-title"
                        >
                          Requests
                        </Typography>
                        <CardContent className="sub-card">
                          <Stack direction={"row"} spacing={2}>
                            <FactCheckOutlinedIcon className="icon" />
                            <div className="card-text">
                              <span className="num-hours">{numberOfHours}</span>
                              <span className="ev-patients"></span>
                            </div>
                          </Stack>
                        </CardContent>
                      </CardContent>
                    </Card>
                  </Stack>
                </Grid>
              </Grid>

              <Box height={20} />
              <Grid container spacing={1}>
                <Grid item xs={7}>
                  <Card
                    sx={{ height: "60vh", maxWidth: 600 }}
                    className="card-2"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="div"
                        className="sub-title"
                      >
                        Weekly Activity
                      </Typography>
                      <BarChart
                        width={600}
                        height={300}
                        series={[
                          {
                            data: pData,
                            label: "Number of Patients",
                            id: "poId",
                            color: "#0b8fac",
                          },
                          {
                            data: uData,
                            label: "Number of Appointments",
                            id: "paId",
                            color: "#16dbcc",
                          },
                          {
                            data: dData,
                            label: "Number of Doctors",
                            id: "doId",
                            color: "#ff7f0e",
                          }, 
                        ]}
                        xAxis={[{ data: xLabels, scaleType: "band" }]}
                      />
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </Grid>

                <Grid item xs={5}>
                  <Card
                    sx={{ maxWidth: 700, height: "60vh" }}
                    className="card-2"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="div"
                        className="sub-title"
                      >
                        Rating Statistics
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <PieChart
                        series={[
                          {
                            data: chartData,
                            arcLabel: null,
                          },
                        ]}
                        width={400}
                        height={200}
                      />
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Box>
      </div>
    </>
  );
}
