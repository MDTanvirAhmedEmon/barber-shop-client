"use client";
import { addBarber } from "@/redux/features/appointments/appointmentsSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";

const SingleBarber = ({
  barber,
  isSelected,
  onClick,
  handleAvailableTileSlot,
}: any) => {
  const dispatch = useAppDispatch();

  return (
    <div onClick={() => handleAvailableTileSlot(barber.id)}>
      <div onClick={() => dispatch(addBarber(barber))}>
        <div
          onClick={onClick}
          className={`${
            isSelected
              ? "bg-primaryColor text-white"
              : " mt-10 md:mt-0 mx-8 md:mx-0 bg-secondaryColor text-white"
          } p-7 rounded-lg cursor-pointer shadow-2xl transition duration-150 ease-in-out`}
        >
          <div className="flex justify-center">
            <Image
              width={200}
              height={200}
              src={barber.barberImage}
              alt="barber"
            />
          </div>
          <div className="text-center mt-8 text-lg font-bold">
            <p>{barber.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBarber;
