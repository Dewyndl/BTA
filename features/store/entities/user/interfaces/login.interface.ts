import { LoginType } from '../types';
import { IUser } from "./user.interface";

export interface ILoginResponse {
    code: string,
    status: string,
    auth_user: IUser,
    auth_hash: string;
}

export type ILoginPayload = {
  login: string;
  type: LoginType;
  password?: string;
  code?: string;
};