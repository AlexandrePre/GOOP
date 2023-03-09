import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import CurrentContext from "../../Contexts/Contexts";

import "react-datepicker/dist/react-datepicker.css";

function ReactDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  // const { input, setInput } = useContext(CurrentContext);
  const [endDate, setEndDate] = useState(new Date());
  // const onChangeStart = (e) => {
  //   setInput({ ...input, [e.name]: e.value });
  // };
  // const onChangeEnd = (e) => {
  //   setInput({ ...input, [e.name]: e.value });
  // };

  return (
    <div className="flex justify-center gap-16 w-full mt-4 text-gray-800">
      <div className=" flex flex-col gap-1 w-2/5">
        <label htmlFor="search" className="text-lg">
          Departure date
        </label>
        <DatePicker
          dateFormatCalendar="MMMM"
          selected={startDate}
          onSelect={(date) => setStartDate(date)}
          // onChange={(date) =>
          //   // onChangeStart({
          //   //   name: "dateStart",
          //   //   value: date.toLocaleDateString("fr-CA"),
          //   // })
          // }
          showTimeSelect
          timeFormat="p"
          timeIntervals={15}
          name="dateStart"
          // value={input.dateStart}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="rounded-xl w-full pl-3 h-8 outline-none focus:border-2 focus:border-orange-500"
        />
      </div>
      <div className=" flex flex-col gap-1 w-2/5">
        <label htmlFor="search" className="text-lg ">
          Return date
        </label>
        <DatePicker
          selected={endDate}
          onSelect={(date) => setEndDate(date)}
          // onChange={(date) =>
          //   onChangeEnd({
          //     name: "dateEnd",
          //     value: date.toLocaleDateString("fr-CA"),
          //   })
          // }
          showTimeSelect
          timeFormat="p"
          timeIntervals={15}
          name="dateEnd"
          // value={input.dateEnd}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className="rounded-xl w-full pl-3 h-8 outline-none focus:border-2 focus:border-orange-500"
        />
      </div>
    </div>
  );
}
export default ReactDatePicker;
