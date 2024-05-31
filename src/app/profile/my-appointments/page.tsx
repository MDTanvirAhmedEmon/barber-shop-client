"use client"
import ProfileSingleAppointment from '@/components/ProfileComponents/ProfileSingleAppointment';
import { useGetCustomerAppointmentsQuery } from '@/redux/features/user/userApi';
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const MyAppointments = () => {
    const {data, isLoading} = useGetCustomerAppointmentsQuery(undefined);

    if(isLoading) {
        <div className="flex justify-center items-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#14100C"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      </div>
    }

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-7 mt-8 mb-8'>


            {
                data?.data?.map((appointment: any) => <ProfileSingleAppointment key={appointment.id} appointment={appointment}></ProfileSingleAppointment>)
            }
        </div>
        </div>
    );
};

export default MyAppointments;