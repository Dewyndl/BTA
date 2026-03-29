import { createSlice } from "@reduxjs/toolkit";
import { TRootState } from "../../types";
import { IUserState } from "./interfaces";
import { userRtk } from "./user.rtk";
import { UserRole } from "./enums";


const initialState: IUserState = {
    currentUser: null,
    pendingToken: null,
    pendingUHash: null,
}

export const usersSLice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fillUser: (state, { payload }) => {
            state.currentUser = payload;
        },
        clearCurrentUser: (state) => {
            state.currentUser = null;
        },
        setPendingCredentials: (state, { payload }: { payload: { token: string; u_hash: string } }) => {
            state.pendingToken = payload.token;
            state.pendingUHash = payload.u_hash;
        },
        clearPendingCredentials: (state) => {
            state.pendingToken = null;
            state.pendingUHash = null;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(userRtk.endpoints.getStoragedUser.matchFulfilled, (state, { payload }) => {
            const rawPayload = payload as any;
            const user = rawPayload.auth_user ?? payload;
            state.currentUser = {
                ...user,
                userRole: UserRole.PATIENT,
            };
        });
    },
});

export const selectUsers = (state: TRootState) => state.users;
export const usersReducer = usersSLice.reducer;
export const { fillUser, clearCurrentUser, setPendingCredentials, clearPendingCredentials } = usersSLice.actions;