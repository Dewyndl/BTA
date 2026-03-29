import { createSlice } from "@reduxjs/toolkit";
import { TRootState } from "../../types";
import { IAppointmentState } from "./interfaces";


const initialState: IAppointmentState = {
    appointmentData: [],
}

export const appointmentSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {

    },
})

export const selectAppointment = (state: TRootState) => state.appointments;
export const appointmentReducer = appointmentSlice.reducer;
export const { } = appointmentSlice.actions;