"use client";
import Header from "@/components/Shared/Header";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { addAppointmentDate } from "@/redux/features/appointments/appointmentsSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Progress } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';


const DatePicker = () => {
  const dispatch = useAppDispatch()

  const [selected, setSelected] = useState<Date>();

  const addDateToSlice =() => {
    const date = selected?.toISOString()
    const payload = {
      appointmentDate: date
    }

    dispatch(addAppointmentDate(payload))
};

  return (
    <div>
      <div>
        <div className="h-20 bg-slate-900">
          <Header></Header>
        </div>

      </div>

      <div className="container mx-auto py-20">
      <h1 className="text-center  mb-10 text-5xl font-bold">
              Select Your Date
            </h1>
        <div className="flex items-center justify-center">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
          />

          </div>
          {
            selected && <div onClick={addDateToSlice} className="text-center"><Link href={`/services/datepicker/barber`}><PrimaryButton>Next</PrimaryButton></Link></div>
            
          }
      </div>
    </div>
  );
};

export default DatePicker;
