import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "../config";

const innerBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

const AUTH_ENDPOINTS = ['/auth', '/token', '/register'];

const isAuthEndpoint = (args: Parameters<typeof innerBaseQuery>[0]): boolean => {
  if (typeof args === 'string') return AUTH_ENDPOINTS.some((ep) => args.endsWith(ep));
  return AUTH_ENDPOINTS.some((ep) => args.url.endsWith(ep));
};

export const rawBaseQuery: typeof innerBaseQuery = async (args, api, extraOptions) => {
  if (!isAuthEndpoint(args)) {
    const token = await AsyncStorage.getItem('token');
    const u_hash = await AsyncStorage.getItem('u_hash');

    if (token && u_hash && typeof args !== 'string' && args.body instanceof FormData) {
      args.body.append('token', token);
      args.body.append('u_hash', u_hash);
    }
  }

  return innerBaseQuery(args, api, extraOptions);
};