"use client";
import Loading from "@/app/loading";
import SingleAdmin from "@/components/SuperAdminComponents/SingleAdmin";
import { useGetAllAdminQuery } from "@/redux/features/admin/adminApi";
import { Table } from "flowbite-react";

const AllAdmins = () => {
  const { data, isLoading }: any = useGetAllAdminQuery(undefined,{ refetchOnMountOrArgChange: true,});
  console.log(data);
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <p className="mb-5 text-2xl">All Admins</p>
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
            {data?.data?.map((admin: any) => (
              <SingleAdmin key={admin.id} admin={admin}></SingleAdmin>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default AllAdmins;
