"use client";

import { Button, Card, Modal, Table } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";
import { useDeleteServiceMutation } from "@/redux/features/service/serviceApi";
import Image from "next/image";

const AdminSingleService = ({ service }: any) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  const [deleteService, { data, isLoading, error }] =
    useDeleteServiceMutation();
  const handleDeleteAdmin = () => {
    deleteService(service.id);
  };

  return (
    <>
      <Card className="">
        <Image
          className=""
          width={200}
          height={200}
          alt="service image"
          layout="responsive"
          src={service.serviceImage}
        />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
          <p>{service.name}</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>Price: ${service.price}</p>

          <div className="flex justify-between mt-3">
            <Link href={`/super-admin/services/all-services/${service.id}`}> <p className="text-black cursor-pointer hover:underline">EDIT</p></Link>
            <p
              className="font-medium text-red-600 hover:underline cursor-pointer"
              color="red"
              onClick={() => props.setOpenModal("pop-up")}
            >
              DELETE
            </p>
          </div>
        </p>
      </Card>

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
              Are you sure you want to delete this service?
            </h3>
            <div className="flex justify-center gap-4">
              <div onClick={handleDeleteAdmin}>
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

export default AdminSingleService;
