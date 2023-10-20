import Image from "next/image";

const ProfileSingleAppointment = ({ appointment }: any) => {
  const date = new Date(appointment.appointmentDate);
  console.log(date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();


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
      <p className="capitalize mt-2">Status: {appointment?.status}</p>
      </div>
    </div>
  );
};

export default ProfileSingleAppointment;
