import type { IUserApi } from '../interfaces/user-api.interface';
import { EMessengerType } from '../enums';

export function mapMessengerType(user: IUserApi): EMessengerType | undefined {
  if (user.u_wa) return EMessengerType.WHATSAPP;
  if (user.u_tg) return EMessengerType.TELEGRAM;
  return undefined;
}