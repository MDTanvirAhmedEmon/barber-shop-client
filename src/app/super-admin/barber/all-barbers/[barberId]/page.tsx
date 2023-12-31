"use client";

import Loading from "@/app/loading";
import { useGetSingleBarberQuery, useUpdateBarberMutation } from "@/redux/features/barber/barberApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const UpdateBarber = ({params}:any) => {

  const {data:singleBarber}: any = useGetSingleBarberQuery(params.barberId);
  console.log(singleBarber);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const [updateBarber, {data, isLoading}] = useUpdateBarberMutation();
  console.log(updateBarber)

  if(data) {
    router.push(`/super-admin/barber/all-barbers`);
  };
  const formSubmit = (data: any) => {
    const barberInfo = {
      data:{
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        barberImage: data.image,
        role: "barber",
        password: data.password,
      },
      id: params.barberId
    };
    updateBarber(barberInfo)
    console.log(barberInfo);
  };

  if(isLoading){
    return <Loading></Loading>
  }


  return (
    <div className="w-auto md:w-auto mx-4 md:mx-24 mt-20 px-4 md:px-10 py-14 shadow-xl bg-[#ffffffb5] rounded-lg">
      <p className="text-3xl text-center font-bold">Change Info As Your Need</p>

      <form onSubmit={handleSubmit(formSubmit)} className="w-auto  md:px-0">

          <div className="flex gap-2">
            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="fullName">Full Name:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="text"
                id=""
                defaultValue={singleBarber?.data?.fullName}
                required
                placeholder="Full Name"
                {...register("fullName", { required: true })}
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="email">Email:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                defaultValue={singleBarber?.data?.email}
                type="email"
                {...register("email", { required: true })}
                id=""
                placeholder="Email Address"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="phone">Phone:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="number"
                {...register("phone", { required: true })}
                id=""
                defaultValue={singleBarber?.data?.phone}
                required
                placeholder="Phone Number"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="password">Password:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="password"
                {...register("password", { required: true })}
                id=""
                defaultValue={singleBarber?.data?.password}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="password">Image Url:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="text"
                {...register("image", { required: true })}
                id=""
                defaultValue={singleBarber?.data?.barberImage}
                placeholder="Image URL"
              />
            </div>

        <input
            className="bg-primary py-3 px-6 text-lg font-semibold bg-secondaryColor text-white rounded-lg mt-3 md:mt-10 cursor-pointer"
            type="submit"
            value="Update"
          />
      </form>
    </div>
  );
};

export default UpdateBarber;
