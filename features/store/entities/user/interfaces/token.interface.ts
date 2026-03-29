import { IAuthContainer } from "./auth-container.interface";
import { IUser } from "./user.interface";

export interface IGetTokenPayload {
    auth_hash: string;
}

export interface IGetTokenResponse {
    code: string;
    status: string;
    data: IAuthContainer;
    auth_user: IUser;
}