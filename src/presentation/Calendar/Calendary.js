import React, { useState } from "react";
import '../Calendar/Calendary.css';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const App = () => {
  // ✅ a change in default state: { from: ..., to: ... }
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  });
  const [solution, setSolution] = useState({
  });
    
  const test = {...selectedDayRange};
  console.log((test.from));
   const testo = test.from
   
   console.log(testo)

  //  setSolution(testo)
  //  console.log(solution)
 
   const essai = () => {
     setSolution({testo});
     
    }
    console.log(solution)
   
  // console.log(consta.day)
  
  // const testo = test.to;
  // console.log(testo.day)
   
  return (
  <div>
    <h1 className="session">
      Choisir la session de lecture
    </h1>
    <div className="calender_center">
    <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      colorPrimary="#0fbcf9" // added this
      colorPrimaryLight="rgba(75, 207, 250, 0.4)" 
      calendarTodayClassName="custom-today-day"
      calendarClassName="responsive-calendar"
      shouldHighlightWeekends
      
    />
</div>
</div>
  );
};

export default App;