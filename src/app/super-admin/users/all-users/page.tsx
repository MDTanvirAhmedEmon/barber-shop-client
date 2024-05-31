/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Loading from "@/app/loading";
import ManageSingleUser from "@/components/ManageUserComponents/ManageSingleUser";
// import { Pagination } from "flowbite-react";
import { useState } from "react";

import { useGetAllUsersQuery } from "@/redux/features/manageUser/manageUserApi";

const AllUsers = () => {
  const { data, isLoading }: any = useGetAllUsersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  console.log(data?.data?.meta.page);

  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };


  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mb-10 mx-3 md:mx-0">
      <p className="mb-5 text-2xl">All Users</p>
      <div className=" md:mr-5 w-[100%] md:w-auto">
        {data?.data?.data?.map((user: any) => (
          <ManageSingleUser key={user.id} user={user}></ManageSingleUser>
        ))}
      </div>

      <div className="my-14 overflow-x-auto">
        {/* <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={10}
        /> */}
      </div>
    </div>
  );
};

export default AllUsers;
