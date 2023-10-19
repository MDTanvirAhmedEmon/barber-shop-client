"use client"
import { addBarberId } from "@/redux/features/appointments/appointmentsSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";


const SingleBarber = ({ barber, isSelected, onClick, handleAvailableTileSlot }: any) => {

  const dispatch = useAppDispatch()

  const addBarberToSlice =() => {
      const payload = {
        barberId: barber?.id
      }

      dispatch(addBarberId(payload))
  };

  return (
    <div onClick={handleAvailableTileSlot}>
    <div onClick={addBarberToSlice}>
      <div onClick={onClick} className={`${isSelected? 'bg-primaryColor text-white scale-125': ' bg-secondaryColor text-white'} p-7 rounded-lg cursor-pointer shadow-2xl transition duration-150 ease-in-out`}>
        <div>
            <Image width={200} height={200} src={barber.barberImage} alt="barber"/>
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
