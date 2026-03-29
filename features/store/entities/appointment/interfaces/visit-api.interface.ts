import { NullableType } from '../../../../../common';

export interface IVisitOptions {
  type?: 'followup' | 'repeat';
  parent_visit_id?: string;
  [key: string]: unknown;
}

export interface IVisit {
  b_id: string;
  u_id: string;
  b_start_address: string;
  b_start_datetime: string;
  b_payment_way: NullableType<string>;
  b_state: string;
  b_options: NullableType<IVisitOptions>;
  b_created: string;
  b_contact: NullableType<string>;
  b_confirm_state: number;
  b_cancel_reason: NullableType<string>;
  b_completed: NullableType<string>;
}

export interface IVisitListResponse {
  code: string;
  status: string;
  data: { booking: Record<string, IVisit> };
}

export interface IVisitDetailResponse {
  code: string;
  status: string;
  data: { booking: Record<string, IVisit> };
}

export interface ICreateVisitData {
  b_start_address: string;
  b_start_datetime: string;
  b_payment_way: string;
  b_options: IVisitOptions;
  u_id: string;
}

export interface ICreateVisitResponse {
  code: string;
  status: string;
  data: { b_id: string };
}

export interface IVisitActionPayload {
  b_id: string;
  action: string;
  data?: string;
  performer?: string;
  reason?: string;
  notify_patient?: string;
}

export interface ICompleteVisitData {
  zones_data: { zone: string; schema: string; dose: number }[];
  schedule_followup: boolean;
  followup_interval_days: number;
  patient_notification: { send: boolean };
}

export interface ICompleteFollowupData {
  results: Record<string, string>;
  send_collage_to_patient: boolean;
  schedule_repeat: boolean;
  repeat_interval_months: number;
}
