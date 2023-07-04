import { baseAPI } from "@root/services/baseApi";

const medicalAppointments = baseAPI.injectEndpoints({
  endpoints: (Builder) => ({
    medicalAppointmentsList: Builder.query({
      query: (payload: any) => ({
        url: `/foster-child/list-medical-appointments/${payload.params.fosterCarerId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["medicalappointments"],
    }),
    medicalAppointmentsById: Builder.query({
      query: (payload: any) => ({
        url: `/medicalappointments/${payload.id}`,
        method: "Get",
        params: payload.params,
      }),
    }),
    createmedicalAppointments: Builder.mutation({
      query: (payload: any) => ({
        url: "/medicalappointments",
        method: "Post",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: ["medicalappointments"],
    }),
    updatemedicalAppointments: Builder.mutation({
      query: (payload: any) => ({
        url: `/medicalappointments/${payload.id}`,
        method: "Put",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: ["medicalappointments"],
    }),
    deletemedicalAppointments: Builder.mutation({
      query: (payload: any) => ({
        url: `/medicalappointments/${payload.id}`,
        method: "Delete",
        params: payload.params,
      }),
      invalidatesTags: ["medicalappointments"],
    }),
  }),
});
export const {
  useLazyMedicalAppointmentsListQuery,
  useLazyMedicalAppointmentsByIdQuery,
  useCreatemedicalAppointmentsMutation,
  useDeletemedicalAppointmentsMutation,
  useMedicalAppointmentsByIdQuery,
  useMedicalAppointmentsListQuery,
  useUpdatemedicalAppointmentsMutation,
} = medicalAppointments;
