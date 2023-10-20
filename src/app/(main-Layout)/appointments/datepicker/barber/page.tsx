"use client";

import Loading from "@/app/loading";
import SingleBarber from "@/components/ServicesComponents/SingleBarber";
import TimeSlotSection from "@/components/ServicesComponents/TimeSlotSection";
import Header from "@/components/Shared/Header";
import {
  useGetAllBarberQuery,
  useGetAvailableTileSlotMutation,
} from "@/redux/features/appointments/appointmentsApi";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Barber = () => {
  const { data, isLoading } = useGetAllBarberQuery(undefined);

  // selection
  const [selectedBarber, setSelectedBarber] = useState(null);

  const handleBarberClick = (barberId: any) => {
    setSelectedBarber(barberId);
  };

  // get available timeSlot
  const { appointments }: any = useAppSelector((state) => state);
  console.log(appointments);

  const [getAvailableTileSlot, { data: TimeSlot, isLoading: loading }] =
    useGetAvailableTileSlotMutation();

  const handleAvailableTileSlot = (id: any) => {
    const infoForAvailableTileSlot = {
      appointmentDate: appointments.appointmentDate,
      barberId: id,
    };
    getAvailableTileSlot(infoForAvailableTileSlot);
  };

  const router = useRouter();

  if(!appointments.appointmentData && !appointments.service){
    router.push('/');
  }

  // Loading 
  if(isLoading){
    return (
    <div>
      <div className="h-20 bg-slate-900">
          <Header></Header>
        </div>
        <div>
        <div className="py-60">
        <div className="">
          <div className="flex  flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
              <Loading></Loading>
          </div>
        </div>
      </div>
        </div>
    </div>
    )
  }

  return (
    <div>
      <div>
        <div className="h-20 bg-slate-900">
          <Header></Header>
        </div>
        <div>
          <div className="md:w-[900px] mx-auto py-20">
            <h1 className="text-center mb-5 md:mb-24 text-3xl md:text-5xl font-bold">
              Choose A Barber
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:space-x-10">
              {data?.data.map((barber: any) => (
                <SingleBarber
                  key={barber.id}
                  isSelected={selectedBarber === barber.id}
                  onClick={() => handleBarberClick(barber.id)}
                  barber={barber}
                  handleAvailableTileSlot={handleAvailableTileSlot}
                ></SingleBarber>
              ))}
            </div>
          </div>
        </div>
        <div className="w-auto lg:w-[800px] mx-auto">
          {selectedBarber && (
            <p className="text-center mb-5 text-3xl md:text-5xl font-bold">
              Select Available Time
            </p>
          )}
            <TimeSlotSection TimeSlot={TimeSlot} loading={loading} ></TimeSlotSection>
        </div>
      </div>
    </div>
  );
};

export default Barber;
