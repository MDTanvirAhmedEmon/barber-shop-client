import Loading from "@/app/loading";
import { useUpdateAppointmentMutation } from "@/redux/features/admin/AppointmentManagementApi";
import Image from "next/image";
import React, { useState } from "react";

const AdminAppointmentSingle = ({ appointment }: any) => {
  const date = new Date(appointment.appointmentDate);
  console.log(date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const [updateAppointment, {data, isLoading}] = useUpdateAppointmentMutation();

  const [selectedStatus, setSelectedStatus] = useState(appointment?.status);

  const handleStatusUpdate = () => {
    const dataStatus = {
        data: { status: selectedStatus },
        id: appointment.id,
    }
    updateAppointment(dataStatus);
  };

    if(isLoading) {
        return <Loading></Loading>
    }
  return (
    <div className="flex mx-3 md:mx-0 items-center justify-center bg-slate-100 text-black p-7 rounded-lg shadow-md">
      <div>
        <Image
          height={200}
          width={200}
          alt="service Image"
          src={appointment?.services?.serviceImage}
        />
      </div>
      <div className="ml-3 md:ml-7">
        <p className="mt-2">Service: {appointment?.services?.name}</p>
        <p className="mt-2">Price: ${appointment?.services?.price}</p>
        <p className="mt-2">Barber Name: {appointment?.barber?.fullName}</p>
        <p className="mt-2">
          Date: {day}/{month}/{year}
        </p>
        <p className="mt-2">
          Time: {appointment?.timeSlot?.startTime} -{" "}
          {appointment?.timeSlot?.endTime}
        </p>
        <select 
        className="mt-3"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
        </select>
        <button className="py-2 px-3 bg-primaryColor text-white mt-3" onClick={handleStatusUpdate}>Update Status</button>
      </div>
    </div>
  );
};

export default AdminAppointmentSingle;
