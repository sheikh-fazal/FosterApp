import { baseAPI } from "@root/services/baseApi";

export const FamilyPersonListAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    //Get API of Family Person List
    GetFamilyPersonList: builder.query<null, object>({
      query: (search: any) => ({
        url: "/foster-child/child-info/family-org-involved/list-fc-family-org-involved",
        method: "GET",
        param: search,
      }),
      providesTags: ["FAMILY_PERSON_LIST"],
    }),

    // Post EHCP API of Family Person List
    postFamilyPersonList: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "/foster-child/child-info/family-org-involved/add-fc-family-org-involved",
        method: "POST",
        param: "63e5eefe677b0d581e40682a",
        body: putDataParameter,
      }),
      invalidatesTags: ["FAMILY_PERSON_LIST"],
    }),

    // Delete API of Family Person List
    deleteFamilyPersonList: builder.mutation({
      query: (id: any) => ({
        url: `foster-child/child-info/family-org-involved/delete-fc-family-org-involved/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FAMILY_PERSON_LIST"],
    }),

  }),
});

export const {
  useGetFamilyPersonListQuery,
  usePostFamilyPersonListMutation,
  useDeleteFamilyPersonListMutation,
} = FamilyPersonListAPI;
