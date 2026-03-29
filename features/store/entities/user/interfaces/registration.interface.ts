import { UserRoleType } from "../types"

export interface IRegistrationPayload {
    u_phone?: string
    u_email?: string
    u_tg?: string
    u_wa?: string
    u_role: UserRoleType;
    data?: string;
    st?: string;
}

export interface IRegistrationResponseData {
    u_id: string
    u_name: string
    u_middle: string
    u_family: string
    u_email: string
    u_phone: string
    u_role: UserRoleType
    token?: string
    u_hash?: string
}

export interface IRegistrationResponse {
    data: IRegistrationResponseData
    code: string
}