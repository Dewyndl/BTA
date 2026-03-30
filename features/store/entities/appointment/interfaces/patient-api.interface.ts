import { NullableType } from '../../../../../common';

export interface IPatientApi {
  u_id: string;
  u_name: string;
  u_phone: NullableType<string>;
  u_email: NullableType<string>;
  u_role: string;
  u_photo: NullableType<string>;
  u_active: number;
}

export interface IPatientListResponse {
  code: string;
  status: string;
  data: { user: Record<string, IPatientApi> };
}

export interface ICreatePatientPayload {
  u_name: string;
  u_phone: string;
  u_email: string;
  u_role: string;
  st: string;
  data: string;
}

export interface ICreatePatientResponse {
  code: string;
  status: string;
  data: {
    u_id: string;
    token: string;
    u_hash: string;
  };
}
