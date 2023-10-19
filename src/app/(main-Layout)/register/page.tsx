"use client";
import Header from "@/components/Shared/Header";
import bglogin from "../../../../public/loginbg.png";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRegisterUserMutation } from "@/redux/features/user/userApi";
import Loading from "@/app/loading";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const Register = () => {
  const imageStyle = {
    backgroundImage: `URL(${bglogin.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };

  const [registerUser, { data, isLoading, error }]: any = useRegisterUserMutation();

  const {token} = useAppSelector((state) => state.userAccessToken)
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const formSubmit = (data: any) => {
    const sinUpInfo = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      role: "customer",
      password: data.password,
      customerProfile: {
        address: data.address,
        gender: data.gender,
        maritalStatus: data.maritalStatus,
      },
    };
    registerUser(sinUpInfo);

  };

  if(token){
    router.push('/');
  }

  if (isLoading) {
    return (
      <div style={imageStyle} className="">
        <div className="h-20 bg-secondaryColor">
          <Header></Header>
        </div>

        <div className="h-screen bg-[#00000077]">
          <div className="h-screen flex justify-center items-center">
            <div className="">
              <Loading></Loading>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={imageStyle} className="">
      <div className="h-20 bg-secondaryColor">
        <Header></Header>
      </div>
      <div className="h-screen bg-[#00000077]">
        <div className="container mx-auto  py-7 md:py-20 h-screen">
          <div className="w-auto md:w-[500px] mx-3 md:mx-auto mt-20 md:mt-0 px-4 md:px-10 py-14 shadow-lg bg-[#ffffffb5] shadow-black rounded-lg">
            <p className="text-3xl text-center font-bold">Register</p>

            <form
              onSubmit={handleSubmit(formSubmit)}
              className="w-auto  md:px-0 "
            >
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
              {error && <p className=" text-red-700">{error?.data?.message}</p>}

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

              <div className="flex flex-col mt-2 md:mt-7 ">
                <label htmlFor="address">Address:</label>
                <input
                  className="border p-3 rounded-lg mt-2"
                  type="text"
                  {...register("address", { required: true })}
                  id=""
                  required
                  placeholder="Address"
                />
              </div>

              <div className="flex gap-2">
                <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
                  <label htmlFor="gender">Gender:</label>
                  <input
                    className="border p-3 rounded-lg mt-2"
                    type="text"
                    {...register("gender", { required: true })}
                    id=""
                    required
                    placeholder="Gender"
                  />
                </div>

                <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
                  <label htmlFor="maritalStatus">Marital Status:</label>
                  <input
                    className="border p-3 rounded-lg mt-2"
                    type="text"
                    {...register("maritalStatus", { required: true })}
                    id=""
                    placeholder="Optional"
                  />
                </div>
              </div>

              <input
                className="bg-primary py-3 px-6 text-lg font-semibold bg-primaryColor text-white rounded-lg mt-3 md:mt-10 cursor-pointer"
                type="submit"
                value="Register"
              />
              <p className="text-md mt-3">
                Already Have An Account?
                <Link className="text-primaryColor" href={`/login`}>
                  {" "}
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
