import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAppointments {
    appointmentDate: string,
    customerId: string,
    barberId: string,
    serviceId: string,
    timeSlotId: string
}

const initialState: IAppointments = {
    appointmentDate: "",
    customerId: "",
    barberId: "",
    serviceId: "",
    timeSlotId: ""
};
const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        addCustomerId: (state, action: PayloadAction<{ customerId: string }>) => {
            state.customerId = action.payload.customerId;
        },
        addServiceId: (state, action: PayloadAction<{ serviceId: string }>) => {
            state.serviceId = action.payload.serviceId;
        },
        addAppointmentDate: (state, action: PayloadAction<{ appointmentDate: string | undefined }>) => {

            if(action.payload.appointmentDate){
                state.appointmentDate = action.payload.appointmentDate;
            }
        },
        addBarberId: (state, action: PayloadAction<{ barberId: string | undefined }>) => {

            if(action.payload.barberId){
                state.barberId = action.payload.barberId;
            }
        },
        addTimeSlotId: (state, action: PayloadAction<{ timeSlotId: string | undefined }>) => {

            if(action.payload.timeSlotId){
                state.timeSlotId = action.payload.timeSlotId;
            }
        },
        clearAppointmentData: (state) => {
            state.appointmentDate = "",
            state.customerId = "",
            state.barberId = "",
            state.serviceId = "",
            state.timeSlotId = ""
        },
        

    }
});

export const { addServiceId, addAppointmentDate, addBarberId, addTimeSlotId, addCustomerId } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;