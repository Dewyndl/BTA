import type { IUserApi } from '../../../../common/interfaces/user-api.interface';
import type { IPatient } from '../../../../features';
import { mapMessengerType } from '../../../../common';

export function userToPatient(user: IUserApi): IPatient {
  const fullName = user.u_name || "";
  const nameParts = fullName.split(" ");

  return {
    id: user.u_id,
    firstName: nameParts[0] || "",
    lastName: nameParts[2] || undefined,
    middleName: nameParts[1] || undefined,
    phone: user.u_phone || user.u_wa || user.u_tg || "",
    birthDate: user.u_birthday ? new Date(user.u_birthday) : undefined,
    imageUrl: user.u_photo || undefined,
    specialFeatures: user.u_details?.specialFeatures,
    reminderInterval: user.u_details?.reminderInterval,
    messenger: mapMessengerType(user),
    refuseReminders: user.u_details?.refuseReminders || false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}