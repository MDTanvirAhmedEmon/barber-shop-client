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

export default function SuperAdminSideBar() {
  const dispatch = useAppDispatch();
  return (
    <div className="fixed h-screen">
      <Sidebar className="w-[300px]" aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
          <Link className="cursor-pointer" href={`/super-admin/dashboard`}>
            <Sidebar.Item icon={HiChartPie}>
              <p>Dashboard</p>
            </Sidebar.Item>
            </Link>
            <Sidebar.Collapse icon={HiTable} label="Admins">
            <Link className="cursor-pointer" href={`/super-admin/all-admins`}><Sidebar.Item>All Admins </Sidebar.Item></Link>
            <Link className="cursor-pointer" href={`/super-admin/create-admin`}><Sidebar.Item>Create Admin</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse icon={HiUser} label="Barbers">
            <Link className="cursor-pointer" href={`/super-admin/barber/all-barbers`}><Sidebar.Item>All Barbers</Sidebar.Item></Link>
            <Link className="cursor-pointer" href={`/super-admin/barber/create-barber`}><Sidebar.Item href="#">Create Barber</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse icon={HiTicket} label="Services">
            <Link className="cursor-pointer" href={`/super-admin/services/all-services`}><Sidebar.Item href="#">All Services</Sidebar.Item></Link>
            <Link className="cursor-pointer" href={`/super-admin/services/create-service`}><Sidebar.Item href="#">Create Service</Sidebar.Item></Link>
            </Sidebar.Collapse>

            <Sidebar.Item href="#" icon={HiBookmark}>
              <p>Appointments</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiClock}>
              <p>Time Slot</p>
            </Sidebar.Item>
            <Sidebar.Collapse icon={HiUser} label="Users">
            <Link className="cursor-pointer" href={`/super-admin/users/all-users`}><Sidebar.Item href="#">All Users</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <div className="cursor-pointer" onClick={() => dispatch(removeUserAccessToken())}>
            <Sidebar.Item icon={HiArrowSmRight}>
              <p>Log Out</p>
            </Sidebar.Item>
            </div>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
