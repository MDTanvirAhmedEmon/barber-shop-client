'use client'

import AdminAppointmentSingle from "@/components/AdminAppointment/AdminAppointmentSingle";
import { useGetAllAppointmentQuery } from "@/redux/features/admin/AppointmentManagementApi";

const Appointments = () => {
    const {data, isLoading}: any = useGetAllAppointmentQuery(undefined);
    console.log(data);
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-7 mt-8'>


            {
                data?.data?.map((appointment: any) => <AdminAppointmentSingle key={appointment.id} appointment={appointment}></AdminAppointmentSingle>)
            }
        </div>
        </div>
    );
};

export default Appointments;