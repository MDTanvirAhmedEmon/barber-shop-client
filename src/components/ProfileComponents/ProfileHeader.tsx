"use client";
import { useGetSingleCustomerInfoQuery } from "@/redux/features/user/userApi";
import { removeUserAccessToken } from "@/redux/features/user/userTokenSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Avatar } from "flowbite-react";
import Link from "next/link";

const ProfileHeader = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetSingleCustomerInfoQuery(undefined);
  return (
    <div>
      <div className="h-36 flex justify-center items-center text-white bg-secondaryColor">
        <h1 className="text-4xl font-bold">User Profile</h1>
      </div>
      <Avatar className="mt-[-25px]" rounded />
      <div className="text-center capitalize text-lg mt-4 mb-1">
        <p className="">{data?.data?.fullName}</p>
        <p className="">{data?.data?.customerProfile?.address}</p>
      </div>

       <div className='container mx-auto flex justify-center mt-3 mb-4 gap-2 md:gap-5'>
                <Link className='bg-primaryColor text-white py-2 px-2 md:px-4 rounded-lg shadow-lg cursor-pointer text-sm md:text-md' href={`/`}>Home</Link>
                <Link className='bg-primaryColor text-white py-2 px-2 md:px-4 rounded-lg shadow-lg cursor-pointer text-sm md:text-md' href={`/profile/my-appointments`}>My Appointments</Link>
                <Link onClick={() => dispatch(removeUserAccessToken())} className='bg-primaryColor text-white py-2 px-2 md:px-4 rounded-lg shadow-lg cursor-pointer text-sm md:text-md' href={`/profile/personal-details`}>Log Out</Link>
            </div> 
    </div>
  );
};

export default ProfileHeader;
