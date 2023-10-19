/* eslint-disable react/no-unescaped-entities */
'use client'
import Header from "@/components/Shared/Header";
import bglogin from "../../../../public/loginbg.png";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useLogInUserMutation } from "@/redux/features/user/userApi";
import Loading from "@/app/loading";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addUserAccessToken } from "@/redux/features/user/userTokenSlice";
import { useRouter } from "next/navigation";


const LogIn = () => {

  const imageStyle = {
    backgroundImage: `URL(${bglogin.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };

  const dispatch = useAppDispatch();

  const [logInUser, {data, error, isLoading}]: any = useLogInUserMutation();
  const {token} = useAppSelector((state) => state.userAccessToken)
  const router = useRouter();

  const { register, formState: { errors }, handleSubmit } = useForm();

  const formSubmit = (data: any) => {
    const logInInfo = {
      email: data.email,
      password: data.password,

    };
    logInUser(logInInfo)
    console.log(logInInfo)
  };
  dispatch(addUserAccessToken(data?.data?.accessToken))
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
    <div  style={imageStyle} className="">
      <div className="h-20 bg-secondaryColor">
        <Header></Header>
      </div>
      <div className="h-screen bg-[#00000077] flex justify-center items-center">
        <div className="container mx-auto ">
          <div className="w-auto md:w-[500px] mx-3 md:mx-auto mt-[-100px] md:mt-0 px-4 md:px-10 py-14 shadow-lg bg-[#ffffffb5] shadow-black rounded-lg">
            <p className="text-3xl text-center font-bold">Log In</p>

            <form onSubmit={handleSubmit(formSubmit)} className="w-auto  md:px-0 ">

                <div className="flex flex-col mt-2 md:mt-7 ">
                  <label htmlFor="email">Email:</label>
                  <input
                    className="border p-3 rounded-lg mt-2"
                    type="email"
                    {...register('email', { required: true })}
                    id=""
                    placeholder="Email Address"
                  />
                </div>

                <div className="flex flex-col mt-2 md:mt-7 ">
                  <label htmlFor="password">Password:</label>
                  <input
                    className="border p-3 rounded-lg mt-2"
                    type="password"
                    {...register('password', { required: true })}
                    id=""
                    placeholder="Password"
                  />
                </div>
                {error && <p className=" text-red-700">{error?.data?.message}</p>}
              <input
                className="bg-primary py-3 px-6 text-lg font-semibold bg-primaryColor text-white rounded-lg mt-5 md:mt-7 cursor-pointer"
                type="submit"
                value="Log In"
              />
              <p className="text-md mt-5">Don't Have An Account?<Link className="text-primaryColor" href={`/register`}> Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
