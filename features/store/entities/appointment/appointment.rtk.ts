import { createApi } from "@reduxjs/toolkit/query/react";
import { NativeModules } from "react-native";
import { BASE_URL } from "../../../../common/config";
import { baseQueryWithErrorLogging, transformFormData } from "../../../../common";
import {
  ICreatePatientPayload,
  ICreatePatientResponse,
  ICreateVisitData,
  ICreateVisitResponse,
  IPatientApi,
  IPatientListResponse,
  IVisit,
  IVisitActionPayload,
  IVisitDetailResponse,
  IVisitListResponse,
} from "./interfaces";

const bookingToArray = <T>(booking: Record<string, T> | T[]): T[] => {
  if (Array.isArray(booking)) return booking;
  return Object.values(booking);
};

export const appointmentRtk = createApi({
  reducerPath: "appointmentRtk",
  baseQuery: baseQueryWithErrorLogging,
  tagTypes: ["Visit", "Patient"],
  endpoints: (builder) => ({
    listPatients: builder.query<IPatientApi[], { lo?: string; lc?: string }>({
      query: ({ lo = "0", lc = "20" }) => ({
        url: "/drive/archive",
        method: "POST",
        body: transformFormData({ type: "patient", lo, lc, u_a_role: "2" }),
      }),
      transformResponse: (raw: IPatientListResponse) => {
        if (!raw || Array.isArray(raw) || !raw.data?.booking) return [];
        return bookingToArray(raw.data.booking as Record<string, IPatientApi>);
      },
      providesTags: ["Patient"],
    }),
    searchPatients: builder.mutation<IPatientApi[], { phone: string }>({
      query: ({ phone }) => ({
        url: "/drive/archive",
        method: "POST",
        body: transformFormData({ type: "patient", phone, u_a_role: "2" }),
      }),
      transformResponse: (raw: IPatientListResponse) => {
        if (!raw || Array.isArray(raw) || !raw.data?.booking) return [];
        return bookingToArray(raw.data.booking as Record<string, IPatientApi>);
      },
    }),
    createPatient: builder.mutation<ICreatePatientResponse, ICreatePatientPayload>({
      queryFn: async (payload) => {
        try {
          await new Promise<void>((resolve) => {
            NativeModules.Networking?.clearCookies(resolve) ?? resolve();
          });
          const body = transformFormData({ ...payload });
          const response = await fetch(`${BASE_URL}register`, {
            method: "POST",
            body,
          });
          const data: ICreatePatientResponse = await response.json();
          return { data };
        } catch (error) {
          return { error: { status: "FETCH_ERROR", error: String(error) } };
        }
      },
      invalidatesTags: ["Patient"],
    }),
    listVisits: builder.query<IVisit[], { type?: string; status?: string; lo?: string; lc?: string }>({
      query: ({ type, status, lo = "0", lc = "20" }) => ({
        url: "/drive",
        method: "POST",
        body: transformFormData({
          ...(type ? { type } : {}),
          ...(status ? { status } : {}),
          lo,
          lc,
          u_a_role: "1",
        }),
      }),
      transformResponse: (raw: IVisitListResponse) => {
        if (!raw || Array.isArray(raw) || !raw.data?.booking) return [];
        return bookingToArray(raw.data.booking);
      },
      providesTags: ["Visit"],
    }),
    createVisit: builder.mutation<ICreateVisitResponse, ICreateVisitData>({
      query: (visitData) => ({
        url: "/drive",
        method: "POST",
        body: transformFormData({ data: JSON.stringify(visitData), u_a_role: "4" }),
      }),
      invalidatesTags: ["Visit"],
    }),
    getVisit: builder.query<IVisit | null, string>({
      query: (b_id) => ({
        url: `/drive/get/${b_id}`,
        method: "POST",
        body: transformFormData({ u_a_role: "1" }),
      }),
      transformResponse: (raw: IVisitDetailResponse) => {
        if (!raw || Array.isArray(raw) || raw.code !== "200") return null;
        const visits = bookingToArray(raw.data?.booking ?? {});
        return visits.find((v) => v !== undefined) ?? null;
      },
      providesTags: (_result, _error, b_id) => [{ type: "Visit", id: b_id }],
    }),
    visitAction: builder.mutation<IVisit | null, IVisitActionPayload>({
      query: ({ b_id, action, data, performer, reason, notify_patient }) => ({
        url: `/drive/get/${b_id}`,
        method: "POST",
        body: transformFormData({
          action,
          u_a_role: "1",
          ...(data ? { data } : {}),
          ...(performer ? { performer } : {}),
          ...(reason ? { reason } : {}),
          ...(notify_patient !== undefined ? { notify_patient } : {}),
        }),
      }),
      transformResponse: (raw: IVisitDetailResponse) => {
        if (!raw || Array.isArray(raw) || raw.code !== "200") return null;
        const visits = bookingToArray(raw.data?.booking ?? {});
        return visits.find((v) => v !== undefined) ?? null;
      },
      invalidatesTags: (_result, _error, { b_id }) => [{ type: "Visit", id: b_id }, "Visit"],
    }),
    getPresignedUrl: builder.mutation<{ presigned_url: string; s3_key: string }, {
      visit_id: string;
      filename: string;
      content_type: string;
      zone: string;
      photo_type: string;
      purpose: string;
    }>({
      query: (payload) => ({
        url: "/storage/presign",
        method: "POST",
        body: transformFormData({ ...payload, u_a_role: "2" }),
      }),
      transformResponse: (raw: { code: string; data: { presigned_url: string; s3_key: string } }) =>
        raw.data,
    }),
    sendReminder: builder.mutation<{ code: string; status: string }, {
      patient_id: string;
      template_type: string;
    }>({
      query: ({ patient_id, template_type }) => ({
        url: "/contact/message/send",
        method: "POST",
        body: transformFormData({
          data: JSON.stringify({ batch: [{ patient_id, template_type }] }),
          u_a_role: "0",
        }),
      }),
    }),
  }),
});

export const {
  useListPatientsQuery,
  useSearchPatientsMutation,
  useCreatePatientMutation,
  useListVisitsQuery,
  useCreateVisitMutation,
  useGetVisitQuery,
  useVisitActionMutation,
  useGetPresignedUrlMutation,
  useSendReminderMutation,
} = appointmentRtk;
