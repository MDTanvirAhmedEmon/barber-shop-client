"use client";
import Loading from "@/app/loading";
import { useCreateAdminMutation } from "@/redux/features/admin/adminApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const CreateAdmin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const [createAdmin, {data, isLoading}] = useCreateAdminMutation();
  console.log(data);
  if(data) {
    router.push(`/super-admin/all-admins`);
  };
  const formSubmit = (data: any) => {
    const adminInfo = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      role: "admin",
      password: data.password,
    };
    createAdmin(adminInfo);
    console.log(adminInfo);
  };

  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div className="w-auto md:w-auto mx-24 mt-20 px-4 md:px-10 py-14 shadow-xl bg-[#ffffffb5] rounded-lg">
      <p className="text-3xl text-center font-bold">Create New Admin</p>

      <form onSubmit={handleSubmit(formSubmit)} className="w-auto  md:px-0">

          <div className="flex gap-2">
            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="fullName">Full Name:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="text"
                id=""
                required
                placeholder="Full Name"
                {...register("fullName", { required: true })}
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="email">Email:</label>
              <input
                className="border p-3 rounded-lg mt-2"
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
                placeholder="Password"
              />
            </div>
          </div>

        <input
            className="bg-primary py-3 px-6 text-lg font-semibold bg-secondaryColor text-white rounded-lg mt-3 md:mt-10 cursor-pointer"
            type="submit"
            value="Create"
          />
      </form>
    </div>
  );
};

export default CreateAdmin;
