import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import esLocale from "@fullcalendar/core/locales/es";

import RenderEventContent from "./RenderEventContent";
import { useState, useRef, useEffect } from "react";

const Calendario = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  
  useEffect(() => {
    console.log(month, year)
    
  }, [year, month]);

  const calendarRef = useRef(null);

  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value));
  };

  const handleMonthChange = (e) => {
    setMonth(parseInt(e.target.value));
  };

  const goToDate = (e) => {
    e.preventDefault();
    if (year && month) {
      const calendarApi = calendarRef.current.getApi();
      const newDate = new Date(year, month - 1);
      calendarApi.gotoDate(newDate);
      setCurrentTitle(getCurrentMonthYear(newDate));
    } else {
      alert("Por favor seleccione un mes y un año");
    }
  };

  const getCurrentMonthYear = (date) => {
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const [currentTitle, setCurrentTitle] = useState(getCurrentMonthYear(new Date()));

  return (
    <>
      <form onSubmit={goToDate}>
        <select value={year} onChange={handleYearChange}>
          <option value="">Año</option>
          {[...Array(20)].map((_, i) => (
            <option key={i} value={2020 + i}>
              {2020 + i}
            </option>
          ))}
        </select>
        <select value={month} onChange={handleMonthChange}>
          <option value="">Mes</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button type="submit">Ir</button>
      </form>
      <div>{currentTitle}</div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        height={"740px"}
        headerToolbar={{
          start: "prevYear,prev,today,next,nextYear",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        locale={esLocale}
        fixedWeekCount={false}
        weekends={false}
        eventTimeFormat={{
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }}
        events={[
          {
            title: "All Day Event",
            date: "2024-06-05",
            backgroundColor: "#f56954",
            borderColor: "#f56954",
          },
          {
            title: "Long Event",
            start: "2024-06-06",
            end: "2024-06-20",
            backgroundColor: "#f39c12",
            borderColor: "#f39c12",
            textColor: "#fff",
          },
          {
            title: "Conference",
            date: "2024-06-11",
            backgroundColor: "#00c0ef",
            borderColor: "#00c0ef",
            textColor: "#fff",
          }
        ]}
        eventContent={RenderEventContent}
        //datesSet={handleDatesSet}
      />
    </>
  );
};

export default Calendario;
