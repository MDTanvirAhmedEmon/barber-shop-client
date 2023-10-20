"use client";
import Loading from "@/app/loading";
import { useDeleteTimeSlotMutation } from "@/redux/features/timeSlot/timeSlotApi";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";


const SingleTimeSlot = ({ slot }: any) => {
  console.log(slot);

  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  const [deleteTimeSlot, { data, isLoading, error }] = useDeleteTimeSlotMutation( );
  const handleDeleteTimeSlot = () => {
    deleteTimeSlot(slot.id);
  };
  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <>
      <div className="mt-5 ">
        <div>
          <div
            className={`text-black border-2 border-primaryColor text-center py-2 px-1 relative`}
          >
            {slot.startTime} - {slot.endTime}
            <div  onClick={() => props.setOpenModal("pop-up")} className="text-red-900 bg-red-300 font-bold text-center py-2 px-4  absolute right-0 top-0 bottom-0 cursor-pointer">
              DELETE
            </div>
          </div>
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
              Are you sure you want to delete this barber?
            </h3>
            <div className="flex justify-center gap-4">
              <div onClick={handleDeleteTimeSlot}>
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

export default SingleTimeSlot;
