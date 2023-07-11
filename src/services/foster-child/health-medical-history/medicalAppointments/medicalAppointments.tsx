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
        url: `/foster-child/get-medical-appointment/${payload.params.medicalAppointmentId}`,
        method: "Get",
        params: payload.params,
      }),
    }),
    createmedicalAppointments: Builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/add-medical-appointment/${payload?.params?.fosterChildId}`,
        method: "Post",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: ["medicalappointments"],
    }),
    updatemedicalAppointments: Builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/update-medical-appointment/${payload?.params.medicalAppointmentId }`,
        method: "PATCH",
        body: payload.body,
      }),
      invalidatesTags: ["medicalappointments"],
    }),
    deletemedicalAppointments: Builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/delete-medical-appointment/${payload?.params?.medicalAppointmentId}`,
        method: "Delete",
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
  useUpdatemedicalAppointmentsMutation,
  useMedicalAppointmentsListQuery,
} = medicalAppointments;
