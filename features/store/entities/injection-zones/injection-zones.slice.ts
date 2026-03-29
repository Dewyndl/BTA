import { createSlice } from "@reduxjs/toolkit";

export const injectionZonesSlice = createSlice({
    name: 'injectionZones',
    initialState: {
        injectionZones: [],
    },
    reducers: {
        setInjectionZones: (state, action) => {
            state.injectionZones = action.payload;
        },
    },
});

export const { setInjectionZones } = injectionZonesSlice.actions;
export const injectionZonesReducer = injectionZonesSlice.reducer;