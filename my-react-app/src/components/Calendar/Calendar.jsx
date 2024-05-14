import React from "react";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function Calendar({appointments}) {

    const eventData = appointments.map(appointment => {
        const startTime = new Date(appointment.dateOfAppointment);
        const endTime = new Date(appointment.dateOfAppointment);
        
        endTime.setMinutes(endTime.getMinutes() + 30);
        
        return {
            Id: appointment.appointmentId,
            Subject: `Appointment with Client ${appointment.clientName}`,
            StartTime: startTime,
            EndTime: endTime
        };
    });


    // Define the dataSource for events
    const localData = {
        dataSource: eventData
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