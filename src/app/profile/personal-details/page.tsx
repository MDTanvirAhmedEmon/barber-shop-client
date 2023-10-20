"use client";
import { useGetSingleCustomerInfoQuery } from "@/redux/features/user/userApi";
import React from "react";

const PersonalDetails = () => {
  const { data, isLoading } = useGetSingleCustomerInfoQuery(undefined);
  console.log(data);
  return (
    <div className="mx-4 mg:mx-0">

      <div className="w-auto bg-slate-100 py-10 mt-7 shadow-lg rounded-lg px-10 lg:w-[900px] mx-auto">
      <p className="text-center text-2xl mb-8">Personal Details</p>
        <p className="text-lg font-bold mt-3 border-b-2">
          Name: {data?.data?.fullName}
        </p>
        <p className="text-lg font-bold mt-3 border-b-2">
          Email: {data?.data?.email}
        </p>
        <p className="text-lg font-bold mt-3 border-b-2">
          Address: {data?.data?.customerProfile?.address}
        </p>
        <p className="text-lg font-bold mt-3 border-b-2">
          Gender: {data?.data?.customerProfile?.gender}
        </p>
        <p className="text-lg font-bold mt-3 border-b-2">
          MaritalStatus: {data?.data?.customerProfile?.maritalStatus}
        </p>
      </div>
    </div>
  );
};

export default PersonalDetails;
