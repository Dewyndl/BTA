import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithErrorLogging, transformFormData } from '../../../../common';
import type {
  ICreateSubscriptionPayload,
  ICreateSubscriptionResponse,
  ISubscription,
  ISubscriptionGetResponse,
} from './interfaces';

export const subscriptionRtk = createApi({
  reducerPath: 'subscriptionRtk',
  baseQuery: baseQueryWithErrorLogging,
  tagTypes: ['Subscription'],
  endpoints: (builder) => ({
    getSubscription: builder.query<ISubscription[], void>({
      query: () => ({
        url: '/subscription/get',
        method: 'GET',
      }),
      transformResponse: (raw: ISubscriptionGetResponse) => {
        if (!raw || !raw.data?.subscription) return [];
        return raw.data.subscription;
      },
      providesTags: ['Subscription'],
    }),
    createSubscription: builder.mutation<ICreateSubscriptionResponse, ICreateSubscriptionPayload>({
      query: (payload) => ({
        url: '/subscription/create',
        method: 'POST',
        body: transformFormData({ data: JSON.stringify(payload) }),
      }),
      invalidatesTags: ['Subscription'],
    }),
  }),
});

export const {
  useGetSubscriptionQuery,
  useCreateSubscriptionMutation,
} = subscriptionRtk;
