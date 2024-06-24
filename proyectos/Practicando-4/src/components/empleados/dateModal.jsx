/* eslint-disable */
import {DayPicker} from "react-day-picker"
import { format } from "date-fns";
import {es} from 'date-fns/locale'
import { useState } from "react";
import 'react-day-picker/dist/style.css';
const css = `
  .my-selected:not([disabled]) {
    background-color: rgba(50,83,134,0.8);
  }
  .my-selected:hover:not([disabled]) { 
    border-color: #325386;
  }
`;


export default function DateModal({changeStateDateModal}) {
  const locale = es;
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today);
  let myTitle = today;

  if (selectedDay) {
    myTitle = format(selectedDay, "eee, LLL d",{locale});
  } else{
    setSelectedDay(today)
  }

  return (
    <>
      <div
        onClick={() => changeStateDateModal(false)}
        className={`datemodal z-[50] bg-black/25 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] grid h-screen w-screen place-content-center`}/>

      <section className="z-[60] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white grid rounded-[15px] max-w-[371px] max-h-[648px] p-[10px]">
        <div className="grid p-[10px] gap-y-[10px]">
          <h2 className="text-[#5F5F5F] font-montserrat font-normal text-lg">SELECCIONE FECHA</h2>
          <h1 className="text-[#1D1D1D] font-montserrat font-semibold text-[32px] capitalize">{myTitle}</h1>
        </div>
        <style>{css}</style>
        <DayPicker
          styles={{
            caption:{
              width: '330px',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 5px',
            },
            caption_label:{
              color: '#1D1D1D',
              fontWeight: 'bold',
              textTransform: 'capitalize',
              fontSize: '19px',
            },
            dropdown:{
              textTransform: 'capitalize',
            },
            nav:{
              color: '#5F5F5F',
            },
            nav_icon:{
              width: '12px'
            },
            root:{
              margin:'0px',
            },
            table:{
              maxWidth: '330px',
              padding: '10px',
              margin: '10px auto',
              fontSize: '18px',
              fontWeight: '600',
              color: '#1D1D1D',
            },
            cell:{
              height: '55px',
              width: '45px',
            },
            head_cell:{
              height: '50px',
              width: '45px',
              fontSize: '18px',
            },
            day:{
              fontWeight: '600',
            },
            day_selected:{
              display: 'none'
            }
          }}
          locale={es}
          mode="single"
          weekStartsOn={0}
          formatters={{
            formatWeekdayName: (weekStartsOn) => format(weekStartsOn, "EEEEE", {locale}),
          }}
          captionLayout="dropdown-buttons" fromYear={2000} toYear={2500}
          selected={selectedDay}
          onSelect={setSelectedDay}
          className="p-[10px] h-[455px]"
          modifiersClassNames={{
            selected: 'my-selected'
          }}
        />
        <div className="h-16 p-[10px] flex justify-end gap-x-3">
          <button
            onClick={() => changeStateDateModal(false)}
            type="button"
            className="hover:bg-[#325386]/20 rounded-md h-[42px] text-[#325386] text-lg px-[10px] font-montserrat font-semibold">
              Cancelar
          </button>
          <button
            onClick={() => changeStateDateModal(false,selectedDay)}
            type="button"
            className="hover:bg-[#325386]/20 rounded-md h-[42px] text-[#325386] text-lg px-[10px] font-montserrat font-semibold">
              Listo
          </button>
        </div>
      </section>
    </>
  );
}
