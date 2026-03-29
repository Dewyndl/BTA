export interface IUserApiDetails {
  specialFeatures?: string;
  reminderInterval?: string;
  refuseReminders?: boolean;
}

export interface IUserApi {
  u_id: string;
  u_name?: string;
  u_phone?: string;
  u_wa?: string;
  u_tg?: string;
  u_birthday?: string;
  u_photo?: string;
  u_details?: IUserApiDetails;
}
