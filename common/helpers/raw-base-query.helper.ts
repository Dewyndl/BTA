import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "../config";

const innerBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

export const rawBaseQuery: typeof innerBaseQuery = async (args, api, extraOptions) => {
  const token = await AsyncStorage.getItem('token');
  const u_hash = await AsyncStorage.getItem('u_hash');

  if (token && u_hash && typeof args !== 'string' && args.body instanceof FormData) {
    args.body.append('token', token);
    args.body.append('u_hash', u_hash);
  }

  return innerBaseQuery(args, api, extraOptions);
};