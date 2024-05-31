"use client";

import SuperAdminSideBar from "@/components/adminSildeBar/SuperAdminSideBar";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { decodedToken } from "@/utils/jwt";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BarberSideBar from "@/components/BarberCompoenets/BarberSideBar";

export default function BarberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.userAccessToken);
  const data: any = decodedToken(token);

  if (data?.role !== "barber") {
    router.push("/");
  }

  const [areaHidden, setAreaHidden] = useState(true);
  const handleToggle = () => {
    setAreaHidden(!areaHidden);
  };


  return (
    <>
      <div className="bg-amber-700 "></div>
      <div className="flex">
        <div className="hidden md:block">
          <BarberSideBar></BarberSideBar>
        </div>
        {/* responsive design bar */}
        {areaHidden ? (
          <div className="w-[100%] md:hidden md:ml-[300px]">
            <div className="h-16 w-[100%] md:w-full px-10 bg-slate-200 flex justify-between md:justify-end items-center">
              <p onClick={handleToggle} className="text-4xl">
                =
              </p>
              <Link
                className="text-md font-bold hover:bg-secondaryColor hover:text-white border border-secondaryColor px-4 py-1 rounded-2xl"
                href={"/"}
              >
                Live Site
              </Link>
            </div>
            <div className="md:pl-5 lg:pl-0 lg:ml-4 w-[100%] md:w-auto mt-3 ">
              {children}
            </div>
          </div>
        ) : (
          <div className="block md:hidden ">
            <BarberSideBar  handleToggle={handleToggle} ></BarberSideBar>
          </div>
        )}


        <div className="hidden md:block md:w-full md:ml-[300px]">
          <div className="h-16 w-[100%] md:w-full px-10 bg-slate-200 flex justify-end items-center">
            <Link
              className="text-md font-bold hover:bg-secondaryColor hover:text-white border border-secondaryColor px-4 py-1 rounded-2xl"
              href={"/"}
            >
              Live Site
            </Link>
          </div>
          <div className="pl-5 lg:pl-0 lg:ml-4 w-[100%] md:w-auto mt-3 ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
