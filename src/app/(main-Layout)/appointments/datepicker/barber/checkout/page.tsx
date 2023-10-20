/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Loading from "@/app/loading";
import Header from "@/components/Shared/Header";
import { useCreateAppointmentMutation } from "@/redux/features/appointments/appointmentsApi";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

const Checkout = () => {
  const { appointments } = useAppSelector((state) => state);

  const date = new Date(appointments.appointmentDate);
  console.log(date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createAppointment, { data, isLoading }] =
    useCreateAppointmentMutation();

  const appointmentData = {
    appointmentDate: appointments.appointmentDate,
    status: "pending",
    barberId: appointments.barber.id,
    serviceId: appointments.service.id,
    timeSlotId: appointments.timeSlot.id,
    paymentInfo: {
      amount: parseFloat(appointments.service.price),
      paymentMethod: "Pay at the Salon",
    },
  };

  const handleBooking = (data: any) => {
    createAppointment(appointmentData);
    console.log(appointmentData);
  };

  if (isLoading) {
    return (
      <div>
        <div className="h-20 bg-secondaryColor">
          <Header></Header>
        </div>
        <div className="py-64">
          <Loading></Loading>
        </div>
      </div>
    );
  }
  const router = useRouter();
  if(data) {
    router.push('/thank-you');
  }

  if(!appointments.appointmentDate && !appointments.service && !appointments.timeSlot){
    router.push('/');
  }

  return (
    <div>
      <div className="h-20 bg-secondaryColor">
        <Header></Header>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center py-10">
        <div className=" w-auto xl:w-2/3 px-3 md:px-0  mr-5">
          <p className="text-3xl font-bold mb-6 ">Your Information</p>
          <form
            onSubmit={handleSubmit(handleBooking)}
            className="w-auto px-3 md:px-0"
          >
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex flex-col md:w-1/2">
                <label htmlFor="FName">First Name:</label>
                <input
                  className="border p-3 rounded-lg mt-2"
                  type="text"
                  name="name"
                  id=""
                  required
                  placeholder="First Name"
                />
              </div>

              <div className="flex flex-col md:w-1/2 mt-6 md:mt-0">
                <label htmlFor="LName">Last Name:</label>
                <input
                  className="border p-3 rounded-lg mt-2"
                  type="text"
                  name="LName"
                  id=""
                  required
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="flex flex-col mt-7">
              <label htmlFor="email">Email:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="email"
                name="email"
                id=""
                required
                placeholder="Email Address"
              />
            </div>

            <div className="flex flex-col mt-7">
              <label htmlFor="phone">Phone:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="number"
                name="phone"
                id=""
                placeholder="Phone"
                required
              />
            </div>

            <div className="flex flex-col mt-7">
              <label htmlFor="notes">Booking notes:</label>
              <textarea
                className="border p-3 rounded-lg mt-2"
                name="notes"
                id=""
                placeholder="Optional"
              />
            </div>

            <div>
              <p className="text-3xl font-bold mt-6">Payment Method</p>
              <div className="mt-5">
                <input
                  className="mb-1"
                  type="radio"
                  name="pay"
                  required
                  id=""
                />
                <label className="text-xl ml-3   font-bold" htmlFor="pay">
                  Pay at the Salon
                </label>
              </div>
            </div>

            {/* mobile */}
            <div className="2xl:border-l-2 pb-6 md:pl-10 2xl:pl-0 px-3 md:px-0 mt-5 md:mt-0 block md:hidden">
              <div className="bg-slate-100 p-7 rounded-xl shadow">
                <p className="text-lg font-bold text-center mb-5">
                  Appointment Details
                </p>
                <Image
                  width={200}
                  height={200}
                  alt="service Image"
                  src={appointments.service.serviceImage}
                />
                <p className="text-lg mt-2">
                  Service: {appointments.service.name}
                </p>
                <p className="text-lg mt-2">
                  Barber Name: {appointments.barber.fullName}
                </p>
                <p className="text-lg mt-2">
                  Date: {day}/{month}/{year}
                </p>
                <p className="text-lg mt-2">
                  Time: {appointments.timeSlot.startTime} -{" "}
                  {appointments.timeSlot.endTime}
                </p>
                <p className="text-lg mt-2 mb-4">
                  Price: ${appointments.service.price}
                </p>
                <Link
                  className="bg-primaryColor text-white py-2 px-4 rounded-md shadow-md cursor-pointer"
                  href={`/appointments`}
                >
                  REBOOK
                </Link>
              </div>
            </div>
            <input
              className="bg-primaryColor py-3 px-6 text-lg font-semibold text-white rounded-lg mt-5 md:mt-10 cursor-pointer"
              type="submit"
              value="Confirm Appointment"
            />
          </form>
        </div>

        <div className="md:ml-5 pb-10 md:pl-10 2xl:pl-0 px-3 md:px-0 mt-5 md:mt-5 hidden md:block">
          <div className="bg-slate-100 p-7 rounded-xl shadow">
            <p className="text-lg font-bold text-center mb-5">
              Appointment Details
            </p>
            <Image
              width={200}
              height={200}
              alt="service Image"
              src={appointments.service.serviceImage}
            />
            <p className="text-lg mt-2">Service: {appointments.service.name}</p>
            <p className="text-lg mt-2">
              Barber Name: {appointments.barber.fullName}
            </p>
            <p className="text-lg mt-2">
              Date: {day}/{month}/{year}
            </p>
            <p className="text-lg mt-2">
              Time: {appointments.timeSlot.startTime} -{" "}
              {appointments.timeSlot.endTime}
            </p>
            <p className="text-lg mt-2 mb-4">
              Price: ${appointments.service.price}
            </p>
            <Link
              className="bg-primaryColor text-white py-2 px-4 rounded-md shadow-md cursor-pointer"
              href={`/appointments`}
            >
              REBOOK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
