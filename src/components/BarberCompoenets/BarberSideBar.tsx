"use client";

import { removeUserAccessToken } from "@/redux/features/user/userTokenSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Sidebar } from "flowbite-react";
import Link from "next/link";
import {
  HiArrowSmRight,
  HiBookmark,
  HiDesktopComputer
} from "react-icons/hi";

export default function BarberSideBar({handleToggle}:any) {
  const dispatch = useAppDispatch();
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 md:right-auto h-screen">
      <Sidebar className="w-[auto] md:w-[300px]" aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link onClick={handleToggle}  className="cursor-pointer" href={`/`}><Sidebar.Item onClick={handleToggle}  icon={HiDesktopComputer}>
              <p>Home</p>
            </Sidebar.Item></Link>

            <div className="cursor-pointer" onClick={() => dispatch(removeUserAccessToken())}>
            <Sidebar.Item  onClick={handleToggle} icon={HiArrowSmRight}>
              <p>Log Out</p>
            </Sidebar.Item>
            </div>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
