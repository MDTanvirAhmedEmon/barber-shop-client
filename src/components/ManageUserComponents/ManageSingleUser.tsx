"use client";

import { Avatar } from "flowbite-react";
import Link from "next/link";
import { Button, Modal, Table } from "flowbite-react";
import { useState } from "react";
import { useDeleteUserMutation } from "@/redux/features/manageUser/manageUserApi";
import Loading from "@/app/loading";

const ManageSingleUser = ({ user }: any) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  const [deleteUser, { data, isLoading, error }] = useDeleteUserMutation();
  const handleDeleteUser = () => {
    deleteUser(user.id);
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className="bg-slate-200 mb-5 shadow-md p-3 md:p-6 flex flex-col md:flex-row gap-7 md:justify-between items-center">
        <div>
          {user.customerProfile.profileImage ? (
            <Avatar
            className=""
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
              <p className="capitalize text-sm md:text-md">Name: {user.fullName}</p>
            </div>
            <div>
              <p className=" mt-3 text-sm md:text-md">Email: {user.email}</p>
            </div>
          </div>

          <div>
            <div>
              <p className="mt-3 md:mt-0 text-sm md:text-md">Phone: {user.phone}</p>
            </div>
            <div>
              <p className="capitalize mt-3 text-sm md:text-md">
                Address: {user.customerProfile.address}
              </p>
            </div>
          </div>


        <div>
          <Link href={`/super-admin/users/all-users/${user.id}`}>
            <p className="text-black  text-sm md:text-md hover:underline cursor-pointer">
              Edit Info
            </p>
          </Link>
        </div>
        <div>
          <p
            onClick={() => props.setOpenModal("pop-up")}
            className="cursor-pointer text-red-600 py-2 px-3 text-sm md:text-md border rounded-md border-red-600"
          >
            Delete
          </p>
        </div>

      </div>

      {/* model here */}
      <Modal
        show={props.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this admin?
            </h3>
            <div className="flex justify-center gap-4">
              <div onClick={handleDeleteUser}>
                <Button
                  color="failure"
                  onClick={() => props.setOpenModal(undefined)}
                >
                  Yes, I am sure
                </Button>
              </div>
              <Button
                color="gray"
                onClick={() => props.setOpenModal(undefined)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ManageSingleUser;
