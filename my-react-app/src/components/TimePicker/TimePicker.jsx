import * as React from 'react';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker} from '@mui/x-date-pickers/StaticTimePicker';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './timePicker.css'
import { Button } from 'react-bootstrap';
import { colors } from '@mui/material';


export default function TimePicker({ onSave, workingHours }) {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [startTime, setStartTime] = useState(dayjs().set('hour', 9).set('minute', 0)); // Default start time
  const [endTime, setEndTime] = useState(dayjs().set('hour', 17).set('minute', 0)); // Default end time

  useEffect(() => {
    if (workingHours) {
      setStartTime(dayjs(workingHours.startTime)); 
      setEndTime(dayjs(workingHours.endTime)); 
    }
  }, [workingHours]);

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  const saveTimeRange = () => {
    onSave({
      startTime: dayjs(startTime).format(), 
      endTime: dayjs(endTime).format(), 
    });  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" flexDirection="row" justifyContent="center" className='week-container'>
          {['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'].map((day) => (
            <Typography
              key={day}
              variant="subtitle2"
              className='week-day'
              style={{ padding: '8px', textAlign: 'center' }}
              onClick={() => handleDayChange(day)}
              sx={{ cursor: 'pointer', fontWeight: selectedDay === day ? 'bold' : 'normal' }}
            >
              {day}
            </Typography>
          ))}
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" mt={2} className='time-pic'>
          <Box>
            <StaticTimePicker
              value={startTime}
              onChange={handleStartTimeChange}
              ampm={false}
              minutesStep={5}
              minTime={dayjs().set('hour', 0).set('minute', 0)}
              maxTime={endTime.subtract(1, 'minute')}
              renderInput={(props) => (
                <Typography
                  variant="body1"
                  sx={{ color: '#4589a3' }} // Custom color for input text
                  onClick={props.onClick}
                >
                  From:
                </Typography>
              )}
            />
          </Box>
          <Box mt={2}>
            <StaticTimePicker
              value={endTime}
              onChange={handleEndTimeChange}
              ampm={false}
              minutesStep={5}
              minTime={startTime.add(1, 'minute')}
              maxTime={dayjs().set('hour', 23).set('minute', 59)}
            />
          </Box>
        </Box>
        <Box className='buttonArea'>
        <Button variant="text" className='button-text'>Cancel</Button>
        <Button variant="text" className='button-text' onClick={saveTimeRange}>Save</Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}