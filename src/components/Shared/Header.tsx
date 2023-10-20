"use client";

import {  useAppSelector } from "@/redux/hooks";
import { decodedToken } from "@/utils/jwt";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Header = () => {
  const { token } = useAppSelector((state) => state.userAccessToken);
  const { role }: any = decodedToken(token);
  console.log(role);

  const router = useRouter();

  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-transparent z-[999]">
      <div className="container mx-auto h-20 px-5 md:px-0">
        <div className="flex items-center h-20 justify-between">
          <Link href={"/"}>
            <h1 className="text-4xl font-bold text-white cursor-pointer">
              Bar<span className="text-primaryColor">b</span>er
            </h1>
          </Link>
          {/* desktop navbar */}
          <div className="hidden md:block uppercase">
            <nav className="z-50">
              <ul className="flex space-x-8 text-md font-bold text-white ">
                <Link href={"/"} className="cursor-pointer">
                  Home
                </Link>

                {!token && (
                  <Link href={"/appointments"} className="cursor-pointer">
                    Appointments
                  </Link>
                )}

                {token && role === "customer" ? (
                  <>
                    <Link href={"/appointments"} className="cursor-pointer">
                    Appointments
                    </Link>
                    <Link href={"/profile/personal-details"} className="cursor-pointer">
                      Profile
                    </Link>
                  </>
                ) : role === "admin" ? (
                  <>
                    <Link href={"/appointments"} className="cursor-pointer">
                    Appointments
                    </Link>

                    <Link href="/admin" className="cursor-pointer">
                      Admin Panel
                    </Link>
                  </>
                ) : role === "super-admin" ? (
                  <>
                    <Link href={"/appointments"} className="cursor-pointer">
                    Appointments
                    </Link>

                    <Link href="/super-admin/dashboard" className="cursor-pointer">
                      Admin Panel
                    </Link>
                  </>
                ) : role === "barber" ? (
                  <Link href="/barber" className="cursor-pointer">
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link href="/login" className="cursor-pointer">
                      Log In
                    </Link>
                    <Link href="/register" className="cursor-pointer">
                      Register
                    </Link>
                  </>
                )}
              </ul>
            </nav>
          </div>

          <div className="md:hidden block">
            <Bars3CenterLeftIcon
              onClick={() => setMenu(!menu)}
              className="h-7 w-7 text-white"
            />
          </div>

          <div
            className={` bg-white absolute top-0 right-0 py-10 pl-10 pr-5 w-64 shadow-md pb-20 md:hidden ${
              menu ? "block" : "hidden"
            }`}
          >
            <XMarkIcon
              onClick={() => setMenu(!menu)}
              className="h-7 w-7 mb-0 float-right ml-3"
            />
            <nav className="">
              <ul className="flex flex-col space-y-5 ">
                <Link
                  href={"/"}
                  className="cursor-pointer"
                  onClick={() => setMenu(!menu)}
                >
                  Home
                </Link>
                {!token && (
                  <Link
                    href={"/appointments"}
                    onClick={() => setMenu(!menu)}
                    className="cursor-pointer"
                  >
                    Appointments
                  </Link>
                )}

                {token && role === "customer" ? (
                  <>
                    <Link
                      href={"/appointments"}
                      onClick={() => setMenu(!menu)}
                      className="cursor-pointer"
                    >
                      Appointments
                    </Link>
                    <Link
                      href={"/profile/personal-details"}
                      onClick={() => setMenu(!menu)}
                      className="cursor-pointer"
                    >
                      Profile
                    </Link>
                  </>
                ) : role === "admin" ? (
                  <>
                    <Link
                      href={"/appointments"}
                      onClick={() => setMenu(!menu)}
                      className="cursor-pointer"
                    >
                      Appointments
                    </Link>

                    <Link
                      href="/admin"
                      onClick={() => setMenu(!menu)}
                      className="cursor-pointer"
                    >
                      Admin Panel
                    </Link>
                  </>
                ) : role === "super-admin" ? (
                  <>
                    <Link
                      href={"/appointments"}
                      onClick={() => setMenu(!menu)}
                      className="cursor-pointer"
                    >
                      Appointments
                    </Link>

                    <Link
                      href="/super-admin/dashboard"
                      onClick={() => setMenu(!menu)}
                      className="cursor-pointer"
                    >
                      Admin Panel
                    </Link>
                  </>
                ) : role === "barber" ? (
                  <Link
                    href="/barber"
                    onClick={() => setMenu(!menu)}
                    className="cursor-pointer"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setMenu(!menu)}
                      className="cursor-pointer"
                    >
                      Log In
                    </Link>
                    <Link
                      href="/register"
                      onClick={() => setMenu(!menu)}
                      className="cursor-pointer"
                    >
                      Register
                    </Link>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
