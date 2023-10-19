"use client";
import Loading from "@/app/loading";
import AvailableTimeSlot from "./AvailableTimeSlot";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { addTimeSlotId } from "@/redux/features/appointments/appointmentsSlice";
import PrimaryButton from "../ui/PrimaryButton";
import Link from "next/link";
import { Button } from "flowbite-react";

const TimeSlotSection = ({ TimeSlot, loading }: any) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const dispatch = useAppDispatch();
  const handleBarberClick = (slotId: any) => {
    setSelectedSlot(slotId);
  };

  const handleSlotId = (id: any) => {
    const payload = {
      timeSlotId: id,
    };

    dispatch(addTimeSlotId(payload));
  };

  if (loading) {
    return (
      <div className="py-5">
          <div className="flex  flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
            <Loading></Loading>
          </div>
      </div>
    );
  }

  return (
    <div>
      <div className=" grid grid-cols-3 mb-10 gap-7 justify-center">
        {TimeSlot?.data.map((slot: any) => (
          <AvailableTimeSlot
            isSelected={selectedSlot === slot.id}
            onClick={() => handleBarberClick(slot.id)}
            handleSlotId={handleSlotId}
            key={slot.id}
            slot={slot}
          ></AvailableTimeSlot>
        ))}
      </div>
      <div className="mb-24 mt-5 text-center">
          {
            selectedSlot && <Link className="bg-secondaryColor text-white font-bold py-3 px-5 shadow-md shadow-slate-400" href={``}>Confirm Appointment</Link>
          }
      </div>
    </div>
  );
};

export default TimeSlotSection;
