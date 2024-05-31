"use client"
import { useGetBarberAppointmentsQuery } from "@/redux/features/appointments/appointmentsApi";
import Loading from "../loading";
import BarberAppointmentSingle from "@/components/BarberCompoenets/BarberAppointmentSingle";

const Barber = () => {
    const {data, isLoading} = useGetBarberAppointmentsQuery(undefined)
    console.log(data);

    if(isLoading){
        return <Loading></Loading>
    }
    return (

        <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-7 mt-8 mb-10 lg:mr-6">
            
            {
                data?.data?.map((appointment: any) => <BarberAppointmentSingle key={appointment.id} appointment={appointment}></BarberAppointmentSingle>)
            }
        </div>
    );
};

export default Barber;