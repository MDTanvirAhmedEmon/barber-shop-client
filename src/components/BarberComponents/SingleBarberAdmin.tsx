"use client";

import { Button, Modal, Table } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";
import { useDeleteBarberMutation } from "@/redux/features/barber/barberApi";
import Loading from "@/app/loading";

const SingleBarberAdmin = ({ barber }: any) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  const [deleteBarber, { isLoading, error }] = useDeleteBarberMutation( );
  const handleDeleteBarber = () => {
    deleteBarber(barber.id);
  };
  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 w-[100%]">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {barber.fullName}
        </Table.Cell>
        <Table.Cell>{barber.email}</Table.Cell>
        <Table.Cell>{barber.phone}</Table.Cell>
        <Table.Cell>
          <div className="flex justify-between">
            <Link
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href={`/super-admin/barber/all-barbers/${barber.id}`}
            >
              <p>Edit</p>
            </Link>
            <p >
                <p className="font-medium ml-7 md:ml-0 text-red-600 hover:underline cursor-pointer" color="red" onClick={() => props.setOpenModal("pop-up")}>
                  DELETE
                </p>
            </p>
          </div>
        </Table.Cell>
      </Table.Row>

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
              Are you sure you want to delete this barber?
            </h3>
            <div className="flex justify-center gap-4">
                <div onClick={handleDeleteBarber}>
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

export default SingleBarberAdmin;
