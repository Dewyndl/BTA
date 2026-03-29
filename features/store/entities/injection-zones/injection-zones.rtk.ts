import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorLogging } from "../../../../common";

export const injectionZonesRtk = createApi({
    reducerPath: 'injectionZonesRtk',
    baseQuery: baseQueryWithErrorLogging,
    endpoints: (builder) => ({

    })
});

export const {
} = injectionZonesRtk;