"use client";

import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-transparent z-[999]">
      <div className="container mx-auto h-20 px-5 md:px-0">
        <div className="flex items-center h-20 justify-between">
          <Link href={"/"}>
            <h1 className="text-4xl font-bold text-white cursor-pointer">
            Barber
            </h1>
          </Link>
          {/* desktop navbar */}
          <div className="hidden md:block">
            <nav className="z-50">
              <ul className="flex space-x-8 text-xl text-white ">
                <Link href={"/"} className="cursor-pointer">
                  Home
                </Link>
                <Link href={"/about"} className="cursor-pointer">
                  About
                </Link>
                <Link href={"/"} className="cursor-pointer">
                  Offers
                </Link>
                <Link href={"/"} className="cursor-pointer">
                  About
                </Link>
                <Link href={"/"} className="cursor-pointer">
                  Contact
                </Link>
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
                <Link
                  href={"/about"}
                  className="cursor-pointer"
                  onClick={() => setMenu(!menu)}
                >
                  About
                </Link>
                <Link
                  href={"/"}
                  className="cursor-pointer"
                  onClick={() => setMenu(!menu)}
                >
                  Offers
                </Link>
                <Link
                  href={"/"}
                  className="cursor-pointer"
                  onClick={() => setMenu(!menu)}
                >
                  About
                </Link>
                <Link
                  href={"/"}
                  className="cursor-pointer"
                  onClick={() => setMenu(!menu)}
                >
                  Contact
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
