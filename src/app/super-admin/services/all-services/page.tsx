"use client";
import Loading from "@/app/loading";
import AdminSingleService from "@/components/AdminServices/AdminSingleService";
import { useGetAllServiceQuery } from "@/redux/features/service/serviceApi";


const AllServices = () => {
  const { data, isLoading }: any = useGetAllServiceQuery(undefined,{ refetchOnMountOrArgChange: true,});
  console.log(data);
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div className="mb-16">
      <p className="mb-5 text-2xl">All Services</p>
      <div className="mr-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-14">
            {data?.data?.map((service: any) => (
              <AdminSingleService key={service.id} service={service}></AdminSingleService>
            ))}

      </div>
    </div>
  );
};

export default AllServices;
