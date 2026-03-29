import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appointmentReducer, appointmentRtk, injectionZonesReducer, injectionZonesRtk, userRtk, usersReducer } from './entities';


const reducer = combineReducers({
    users: usersReducer,
    appointments: appointmentReducer,
    injectionZones: injectionZonesReducer,
    [userRtk.reducerPath]: userRtk.reducer,
    [appointmentRtk.reducerPath]: appointmentRtk.reducer,
    [injectionZonesRtk.reducerPath]: injectionZonesRtk.reducer
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(
      userRtk.middleware,
      appointmentRtk.middleware,
      injectionZonesRtk.middleware,
    ),
});