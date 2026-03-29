import { UserRoleType } from "../types"
import { IAuthContainer } from "./auth-container.interface";

export interface IEditUserPayload {
    data: IEditUser;
    auth: IAuthContainer;
}

export interface IEditUser {
    u_id: string
    u_name: string
    u_middle: string
    u_family: string
    u_email: string
    u_phone: string
    u_role: UserRoleType
}

export interface IEditUserResponse {
    u_id: string
    u_name: string
    u_middle: string
    u_family: string
    u_email: string
    u_phone: string
    u_role: UserRoleType
}