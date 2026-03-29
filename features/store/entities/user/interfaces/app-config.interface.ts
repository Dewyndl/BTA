export interface IPaymentMethod {
  id: string;
  name: string;
}

export interface IAppConfig {
  code: string;
  status: string;
  data: {
    payment_methods?: IPaymentMethod[];
    currencies?: Record<string, string>;
    cities?: Record<string, string>;
    languages?: Record<string, string>;
    [key: string]: unknown;
  };
}
