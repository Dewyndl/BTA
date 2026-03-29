import { NullableType } from "../../../../../common";
import { UserRole } from "../enums";
import { UbanType } from "../types";

export interface IUser {
    u_id: string;
    u_name: string;
    u_family: NullableType<string>;
    u_middle: NullableType<string>;
    u_email: NullableType<string>;
    u_phone: NullableType<string>;
    u_role: string;
    u_a_role: NullableType<string>;
    u_check_state: NullableType<string>;
    u_ban: UbanType;
    u_active: number;
    u_photo: NullableType<string>;
    u_birthday: NullableType<string>;
    u_phone_checked: number;
    u_lang: NullableType<string>;
    u_currency: NullableType<string>;
    u_city: NullableType<string>;
    u_tips: NullableType<string>;
    u_lang_skills: NullableType<string>;
    u_description: NullableType<string>;
    u_gps_software: NullableType<string>;
}

export interface IUserUi extends IUser {
    userRole: UserRole;
}

export interface IUserState {
    currentUser: NullableType<IUserUi>;
    pendingToken: NullableType<string>;
    pendingUHash: NullableType<string>;
}