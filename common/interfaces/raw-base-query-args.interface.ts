import { BaseQueryApi, FetchArgs, FetchBaseQueryArgs } from "@reduxjs/toolkit/query";

export interface IRawBaseQuery {
    accessToken?: string;
    isAuth: boolean;
    fetchBaseArgs: FetchBaseQueryArgs;
    args: string | FetchArgs;
    api: BaseQueryApi; 
}