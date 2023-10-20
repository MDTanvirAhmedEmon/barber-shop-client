"use client"
import ProfileSingleAppointment from '@/components/ProfileComponents/ProfileSingleAppointment';
import { useGetCustomerAppointmentsQuery } from '@/redux/features/user/userApi';
import React from 'react';

const MyAppointments = () => {
    const {data, isLoading} = useGetCustomerAppointmentsQuery(undefined);
    console.log(data);


    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-7 mt-8'>


            {
                data?.data?.map((appointment: any) => <ProfileSingleAppointment key={appointment.id} appointment={appointment}></ProfileSingleAppointment>)
            }
        </div>
        </div>
    );
};

export default MyAppointments;