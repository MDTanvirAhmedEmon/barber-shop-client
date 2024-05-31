"use client";

import { removeUserAccessToken } from "@/redux/features/user/userTokenSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Sidebar } from "flowbite-react";
import Link from "next/link";
import {
  HiArrowSmRight,
  HiChartPie,
  HiClock,
  HiBookmark,
  HiUser,
  HiTable,
  HiTicket,
} from "react-icons/hi";

export default function SuperAdminSideBar({handleToggle}:any) {
  const dispatch = useAppDispatch();
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 md:right-auto h-screen">
      <Sidebar className="w-[auto] md:w-[300px]" aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
          <Link className="cursor-pointer" href={`/super-admin`}>
            <Sidebar.Item onClick={handleToggle} icon={HiChartPie}>
            <Link onClick={handleToggle}  className="cursor-pointer" href={`/super-admin`}>
             <p>Dashboard</p>
             </Link>
            </Sidebar.Item>
            </Link>
            <Sidebar.Collapse icon={HiTable} label="Admins">
            <Link onClick={handleToggle}  className="cursor-pointer" href={`/super-admin/all-admins`}><Sidebar.Item>All Admins </Sidebar.Item></Link>
            <Link onClick={handleToggle}  className="cursor-pointer" href={`/super-admin/create-admin`}><Sidebar.Item>Create Admin</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse icon={HiUser} label="Barbers">
            <Link onClick={handleToggle}  className="cursor-pointer" href={`/super-admin/barber/all-barbers`}><Sidebar.Item>All Barbers</Sidebar.Item></Link>
            <Link onClick={handleToggle}  className="cursor-pointer" href={`/super-admin/barber/create-barber`}><Sidebar.Item href="#">Create Barber</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse icon={HiTicket} label="Services">
            <Link onClick={handleToggle}  className="cursor-pointer" href={`/super-admin/services/all-services`}><Sidebar.Item href="#">All Services</Sidebar.Item></Link>
            <Link onClick={handleToggle}  className="cursor-pointer" href={`/super-admin/services/create-service`}><Sidebar.Item href="#">Create Service</Sidebar.Item></Link>
            </Sidebar.Collapse>

            <Link onClick={handleToggle}  className="cursor-pointer" href={`/super-admin/appointments`}><Sidebar.Item onClick={handleToggle}  icon={HiBookmark}>
              <p>Appointments</p>
            </Sidebar.Item></Link>
            <Sidebar.Item icon={HiClock}>
            <Link onClick={handleToggle}  className="cursor-pointer" href={`/super-admin/time-slot`}><p>Time Slot</p></Link>
            </Sidebar.Item>
            <Sidebar.Collapse icon={HiUser} label="Users">
            <Link onClick={handleToggle}  className="cursor-pointer" href={`/super-admin/users/all-users`}><Sidebar.Item>All Users</Sidebar.Item></Link>
            </Sidebar.Collapse>
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
