import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  ];


export default function barChart() {
  return (
    <BarChart
                width={500}
                height={300}
                series={[
                    { data: pData, label: 'Patients Online', id: 'poId'},
                    { data: uData, label: 'Patient Apps', id: 'paId' },
                  ]}
                 xAxis={[{ data: xLabels, scaleType: 'band' }]}
              />

  );
}