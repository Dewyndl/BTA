import { BodyType } from "../types";

export const transformFormData = (body: BodyType): FormData => {
  const formData = new FormData();

  Object.entries(body).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, String(value));
    }
  });

  return formData;
};