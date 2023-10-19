"use client";

import Loading from "@/app/loading";
import SingleService from "@/components/ServicesComponents/SingleService";
import Header from "@/components/Shared/Header";
import BarberBreadcrumb from "@/components/ui/Breadcrumb";
import { useGetAllServicesQuery } from "@/redux/features/appointments/appointmentsApi";

const Service = () => {
  const { data, isLoading } = useGetAllServicesQuery(undefined);
  console.log(data?.data);

  if (isLoading) {
    return (
      <div>
        <div>
          <div className="h-20 bg-secondaryColor">
            <Header></Header>
          </div>
        </div>

        <div className="py-60">
          <div className=" w-[94%] lg:w-[90%] xl:w-[1100px] mx-auto">
            <div className="flex  flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
              <Loading></Loading>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <div className="h-20 bg-slate-900">
          <Header></Header>
        </div>
      </div>
      <BarberBreadcrumb></BarberBreadcrumb>
      <div className="py-20">
        <div className=" w-[94%] lg:w-[90%] xl:w-[1100px] mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data?.data.map((service: any) => (
              <SingleService key={service.id} service={service}></SingleService>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
