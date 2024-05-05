import React from "react";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function Calendar({workingHours}) {
    // Define the dataSource for events
    const localData = {
        dataSource: [
            {
                Id: 1,
                Subject: 'Event 1',
                StartTime: workingHours.startTime, 
                EndTime: workingHours.endTime 
            }
        ]
    };


    return (
        <div>
            <ScheduleComponent currentView="Week" eventSettings={localData} startHour="07:00" endHour="19:00" readonly={true}>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    );
}

export default Calendar;