import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarComponent() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        calendarType="US"
        onChange={() => onChange(value)}
        value={value}
      />
    </div>
  );
}

export default CalendarComponent;
