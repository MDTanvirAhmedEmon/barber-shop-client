'use client';
import { Card } from "flowbite-react";
import PrimaryButton from "../ui/PrimaryButton";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { addService } from "@/redux/features/appointments/appointmentsSlice";
import Link from "next/link";


const SingleService = ({ service }: any) => {
    const dispatch = useAppDispatch()

    
  console.log(service);
  return (
    <div>
      <Card >
        <Image className="" width={200} height={200} alt="service image" layout="responsive" src={service.serviceImage}/>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
          <p>{service.name}</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
                Price: ${service.price}
            </p>
            <div className="mt-4">
            <Link href={`/appointments/datepicker`}> <div onClick={()=> dispatch(addService(service))}> <PrimaryButton>Book Now</PrimaryButton></div></Link>
            </div>
        </p>
      </Card>
    </div>
  );
};

export default SingleService;
