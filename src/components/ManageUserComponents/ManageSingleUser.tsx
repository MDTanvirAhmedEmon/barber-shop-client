"use client";

import { Avatar } from "flowbite-react";
import Link from "next/link";

const ManageSingleUser = ({ user }: any) => {
  return (
    <div className="bg-slate-200 mb-5 shadow-md p-6 flex gap-7 justify-between items-center">
      <div>
        {user.customerProfile.profileImage ? (
          <Avatar
            alt="avatar of Jese"
            img="/images/people/profile-picture-5.jpg"
            rounded
          />
        ) : (
          <Avatar rounded />
        )}
      </div>
      <div>
        <div>
          <p className="capitalize">Name: {user.fullName}</p>
        </div>
        <div>
          <p className=" mt-3">Email: {user.email}</p>
        </div>
      </div>

      <div>
        <div>
          <p className="">Phone: {user.phone}</p>
        </div>
        <div>
          <p className="capitalize mt-3">
            Address: {user.customerProfile.address}
          </p>
        </div>
      </div>
      <div>
        <Link href={`/super-admin/users/all-users/${user.id}`}><p className="text-black hover:underline cursor-pointer">Edit Info</p></Link>
      </div>
      <div>
        <p className="cursor-pointer text-red-600 py-2 px-3 border rounded-md border-red-600">
          Delete
        </p>
      </div>
    </div>
  );
};

export default ManageSingleUser;
