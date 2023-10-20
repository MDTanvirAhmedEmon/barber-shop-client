"use client";

import Loading from "@/app/loading";
import SingleTimeSlot from "@/components/AdminTimeSlotComponents/SingleTimeSlot";
import { useCreateTimeSlotMutation, useGetAllTimeSlotQuery } from "@/redux/features/timeSlot/timeSlotApi";
import { useForm } from "react-hook-form";

const TimeSlot = () => {
  const { data }: any = useGetAllTimeSlotQuery(undefined,{refetchOnMountOrArgChange: true});
  console.log(data);

  const [createBarber, {data:newTimeSlot, isLoading}] = useCreateTimeSlotMutation();
  console.log(data);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const formSubmit = (data: any) => {
    const timeInfo = {
      startTime: data.startTime,
      endTime: data.endTime,
    };
    createBarber(timeInfo)
    reset();

  };
  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row mt-20  lg:mr-10 mx-4 lg:mx-0">
        <div className="lg:w-1/2 lg:pr-10">
          <form onSubmit={handleSubmit(formSubmit)} className="w-auto  md:px-0">
            <div className="flex gap-2">
              <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
                <label htmlFor="startTime">Start Time:</label>
                <input
                  className="border p-3 rounded-lg mt-2"
                  type="text"
                  id=""
                  required
                  placeholder="Use AM PM"
                  {...register("startTime", { required: true })}
                />
              </div>

              <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
                <label htmlFor="endTime">End Time:</label>
                <input
                  className="border p-3 rounded-lg mt-2"
                  type="text"
                  {...register("endTime", { required: true })}
                  id=""
                  placeholder="Use AM PM"
                />
              </div>
            </div>

            <input
              className="bg-primary py-3 px-6 text-lg font-semibold bg-secondaryColor text-white rounded-lg mt-3 md:mt-10 cursor-pointer"
              type="submit"
              value="Create"
            />
          </form>
          <div className="mt-5">
            <p>Time Formate Example</p>
            <p>11:00 AM - 11:30 AM</p>
          </div>
        </div>

        <div className="lg:w-1/2 lg:border-l-2 lg:pl-10 pb-20">
          <p className="text-2xl font-bold">All Time Slot</p>
          {data?.data.map((slot: any) => (
            <SingleTimeSlot key={slot.id} slot={slot}></SingleTimeSlot>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSlot;
