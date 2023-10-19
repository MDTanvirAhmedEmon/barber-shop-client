"use client";
import Loading from "@/app/loading";
import {  useGetSingleAdminQuery, useUpdateAdminMutation } from "@/redux/features/admin/adminApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const UpdateUser = ({params}:any) => {

  const {data:singleUser}: any = useGetSingleAdminQuery(params.userId);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const [updateAdmin, {data, isLoading}] = useUpdateAdminMutation();;

  if(data) {
    router.push(`/super-admin/users/all-users`);
  };
  const formSubmit = (data: any) => {
    const userInfo = {
      data:{
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        role: "customer",
        password: data.password,
        profileImage: data.profileImage,
        address: data.address,
        gender: data.gender,
        maritalStatus: data.maritalStatus
      },
      id: params.userId
    };
    updateAdmin(userInfo)
    console.log(userInfo);
  };
  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div className="w-auto md:w-auto mx-24 mt-20 px-4 md:px-10 py-14 shadow-xl bg-[#ffffffb5] rounded-lg">
      <p className="text-3xl text-center font-bold">Change Info As Your Need</p>

      <form onSubmit={handleSubmit(formSubmit)} className="w-auto  md:px-0">

          <div className="flex gap-2">
            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="fullName">Full Name:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="text"
                id=""
                defaultValue={singleUser?.data?.fullName}
                required
                placeholder="Full Name"
                {...register("fullName", { required: true })}
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="email">Email:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                defaultValue={singleUser?.data?.email}
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
                defaultValue={singleUser?.data?.phone}
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
                defaultValue={singleUser?.data?.password}
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="profileImage">Profile Image:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="number"
                {...register("profileImage", { required: true })}
                id=""
                defaultValue={singleUser?.data?.customerProfile?.profileImage}
                required
                placeholder="Optional"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="address">Address:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="text"
                {...register("address", { required: true })}
                id=""
                defaultValue={singleUser?.data?.customerProfile?.address}
                placeholder="Address"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="gender">Gender:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="text"
                {...register("gender", { required: true })}
                id=""
                defaultValue={singleUser?.data?.customerProfile?.gender}
                required
                placeholder="Gender"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="maritalStatus">Marital Status:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="text"
                {...register("maritalStatus")}
                id=""
                defaultValue={singleUser?.data?.customerProfile?.maritalStatus}
                placeholder="Optional"
              />
            </div>
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

export default UpdateUser;
