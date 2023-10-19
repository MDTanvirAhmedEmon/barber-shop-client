"use client";
import Loading from "@/app/loading";
import SingleBarberAdmin from "@/components/BarberComponents/SingleBarberAdmin";
import { useGetAllBarberQuery } from "@/redux/features/appointments/appointmentsApi";
import { Table } from "flowbite-react";

const AllBarbers = () => {
  const { data, isLoading } = useGetAllBarberQuery(undefined,{ refetchOnMountOrArgChange: true,});
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <p className="mb-5 text-2xl">All Barbers</p>
      <div className="mr-5">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>phone</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y w-full">
            {data?.data?.map((barber: any) => (
              <SingleBarberAdmin key={barber.id} barber={barber}></SingleBarberAdmin>
            ))}

          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default AllBarbers;
