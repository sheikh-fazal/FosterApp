import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const partnerReferenceApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    partnerReferenceList: builder.query<null, object>({
      query: (search: any) => ({
        url: "assessment-stage-one/former-partner-references-list",
        method: "GET",
        params: search,
      }),
      providesTags: ["PARTNER_REFERENCE"],
    }),
    postPartnerReferenceList: builder.mutation({
      query: (formData: any) => ({
        url: "assessment-stage-one/add-former-pertner-referances",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["PARTNER_REFERENCE"],
    }),
    singlePartnerReferenceList: builder.query({
      query: (id: any) =>
        `assessment-stage-one/get-former-partner-references/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["PARTNER_REFERENCE"],
    }),
    patchPartnerReferenceList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `assessment-stage-one/update-former-partner-references/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["PARTNER_REFERENCE"],
    }),
    deletePartnerReferenceList: builder.mutation({
      query: (id: any) => ({
        url: `assessment-stage-one/delete-former-partner-references/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PARTNER_REFERENCE"],
    }),
  }),
});
export const {
  usePartnerReferenceListQuery,
  usePostPartnerReferenceListMutation,
  useLazySinglePartnerReferenceListQuery,
  usePatchPartnerReferenceListMutation,
  useDeletePartnerReferenceListMutation,
} = partnerReferenceApi;
