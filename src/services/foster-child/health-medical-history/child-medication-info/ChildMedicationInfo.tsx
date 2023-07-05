import { baseAPI } from "@root/services/baseApi";

const ChildMedicationInfo = baseAPI.injectEndpoints({
  endpoints: (Builder) => ({
    getChildMedicationInfo: Builder.query({
      query: (payload: any) => ({
        url: `/foster-child/list-child-medication-info/${payload.fosterCarerId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["child-medication-info"],
    }),
    getChildMedicationInfoById: Builder.query({
      query: (payload: any) => ({
        url: `/foster-child/get-child-medication-info/${payload.id}`,
        method: "Get",
        params: payload.params,
      }),
    }),
    createChildMedicationInfo: Builder.mutation({
      query: (payload: any) => ({
        url: "/foster-child/child-medication-info",
        method: "Post",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: ["child-medication-info"],
    }),
    updateChildMedicationInfoById: Builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/update-child-medication-info/${payload.id}`,
        method: "Put",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: ["child-medication-info"],
    }),
    deleteChildMedicationInfoById: Builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/delete-child-medication-info/${payload.id}`,
        method: "Delete",
        params: payload.params,
      }),
      invalidatesTags: ["child-medication-info"],
    }),
  }),
});

export const {
useCreateChildMedicationInfoMutation,
useDeleteChildMedicationInfoByIdMutation,
useGetChildMedicationInfoByIdQuery,
useGetChildMedicationInfoQuery,
useLazyGetChildMedicationInfoByIdQuery,
useLazyGetChildMedicationInfoQuery,
useUpdateChildMedicationInfoByIdMutation,
} = ChildMedicationInfo;
