import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithErrorLogging, normalizePhone, transformFormData } from '../../../../common';
import type { IUserApi } from '../../../../common';
import { IAppConfig, IAuthContainer, IEditUserPayload, IEditUserResponse, IGetTokenPayload, IGetTokenResponse, ILoginPayload, ILoginResponse, IRegistrationPayload, IRegistrationResponse, IUser } from './interfaces';

export const userRtk = createApi({
  reducerPath: 'userRtk',
  baseQuery: baseQueryWithErrorLogging,
  endpoints: (builder) => ({
    checkPhone: builder.mutation<void, string>({
      query: (phone) => ({
        url: '/check-phone',
        method: 'POST',
        body: transformFormData({ phone: normalizePhone(phone) }),
      }),
    }),
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
    sendCode: builder.mutation<ILoginResponse, ILoginPayload>({
      query: (body) => ({
        url: '/auth',
        method: 'POST',
        body: transformFormData({ ...body }),
      }),
    }),
    loginUser: builder.mutation<ILoginResponse, ILoginPayload>({
      query: (body) => ({
        url: '/auth',
        method: 'POST',
        body: transformFormData({ ...body }),
      }),
    }),
    registrationUser: builder.mutation<IRegistrationResponse, IRegistrationPayload>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body: transformFormData({ ...body }),
      }),
    }),
    editUser: builder.mutation<IEditUserResponse, IEditUserPayload>({
      query: (body) => ({
        url: '/user',
        method: 'POST',
        body: transformFormData({ data: JSON.stringify(body.data) }),
      }),
    }),
    getStoragedUser: builder.mutation<IUser, void>({
      query: () => ({
        url: '/user',
        method: 'POST',
        body: transformFormData({}),
      }),
    }),
    getToken: builder.mutation<IGetTokenResponse, IGetTokenPayload>({
      query: (body) => ({
        url: '/token',
        method: 'POST',
        body: transformFormData({ ...body }),
      }),
    }),
    confirmCode: builder.mutation<ILoginResponse, ILoginPayload>({
      query: (body) => ({
        url: '/auth',
        method: 'POST',
        body: transformFormData({ ...body }),
      }),
    }),
    getAccount: builder.query<IUserApi, string>({
      query: (phone) => ({
        url: '/account',
        params: { phone: normalizePhone(phone) },
      }),
    }),
    getAppConfig: builder.query<IAppConfig, void>({
      query: () => ({
        url: '/data/',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCheckPhoneMutation,
  useLoginUserMutation,
  useConfirmCodeMutation,
  useLazyGetAccountQuery,
  useGetTokenMutation,
  useRegistrationUserMutation,
  useEditUserMutation,
  useLogoutUserMutation,
  useSendCodeMutation,
  useGetStoragedUserMutation,
  useGetAppConfigQuery,
} = userRtk;