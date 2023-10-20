import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAppointments {
    appointmentDate: string,
    customer: any,
    barber: any,
    service: any,
    timeSlot: any
}

const initialState: IAppointments = {
    appointmentDate: "",
    customer: null,
    barber: null,
    service: null,
    timeSlot: null
};
const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<any>) => {
            state.customer = action.payload;
        },
        addService: (state, action: PayloadAction<any>) => {
            state.service = action.payload;
        },
        addAppointmentDate: (state, action: PayloadAction<{ appointmentDate: string | undefined }>) => {

            if(action.payload.appointmentDate){
                state.appointmentDate = action.payload.appointmentDate;
            }
        },
        addBarber: (state, action: PayloadAction<any>) => {

            if(action.payload){
                state.barber = action.payload;
            }
        },
        addTimeSlot: (state, action: PayloadAction<any>) => {

            if(action.payload){
                state.timeSlot = action.payload;
            }
        },
        clearAppointmentData: (state) => {
            state.appointmentDate = "",
            state.customer = null,
            state.barber = null,
            state.service = null,
            state.timeSlot = null
        },
        

    }
});

export const { addService, addAppointmentDate, addBarber, addTimeSlot, addCustomer,clearAppointmentData } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;