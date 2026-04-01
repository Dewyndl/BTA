export interface ISubscription {
  subs_id: string;
  u_id: string;
  tariff: string;
  start_date: string;
  end_date: string;
  cancellation_date: string;
  subs_status: string | null;
  auto_renew: string;
  p_id: string[] | null;
  paid: boolean;
}

export interface ISubscriptionGetResponse {
  code: string;
  status: string;
  data: {
    subscription: ISubscription[];
  };
}

export interface ICreateSubscriptionPayload {
  tariff: string;
}

export interface ICreateSubscriptionResponse {
  code: string;
  status: string;
  data: {
    affected_fields: string[];
    subs_id: number;
  };
}
