import Header from "@/components/Shared/Header";
import Link from "next/link";
import React from "react";

const ThankYou = () => {
  return (
    <div>
      <div className="h-20 bg-secondaryColor">
        <Header></Header>
      </div>
      <div className="container mx-auto py-32">
        <div>
          <div className="text-center text-5xl font-bold">
            <h1>Thank You</h1>
            <p className="mt-3">For Your Appointment...</p>
          </div>
          <p className="text-center mt-8">
            {" "}
            Go to ... <Link className="bg-primaryColor text-white py-2 px-4 shadow-md rounded-md" href={"/profile"}>Profile</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
