import { NullableType } from "../../../../../common";

export interface IAppointmentGetResponse {
  b_id: string;
  u_id: string;

  b_start_address: string;
  b_start_latitude: NullableType<string>;
  b_start_longitude: NullableType<string>;

  b_destination_address: string;
  b_destination_latitude: NullableType<string>;
  b_destination_longitude: NullableType<string>;

  b_start_datetime: string;
  b_custom_comment: string;
  b_flight_number: string;
  b_terminal: string;

  b_passengers_count: string;
  b_luggage_count: string;
  b_placard: string;

  b_car_class: NullableType<string>;
  b_state: string;
  b_created: string;
  b_confirm_state: number;

  b_cars_count: string;
  b_approved: NullableType<string>;
  b_max_waiting: number;
  b_estimate_waiting: NullableType<string>;

  b_driver_code: string;
  b_options: NullableType<string>;
  b_contact: NullableType<string>;

  b_location_class: string;
  b_distance_estimate: NullableType<string>;
  b_price_estimate: NullableType<string>;
  b_currency: NullableType<string>;
  b_night: NullableType<string>;

  drivers: NullableType<string>;
  b_comments: NullableType<string>;
  b_services: NullableType<string>;
}