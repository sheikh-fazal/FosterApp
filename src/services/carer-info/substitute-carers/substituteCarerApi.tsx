import { baseAPI, TAGS } from "@root/services/baseApi";

export const substituteCarerApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getSelectedSubstituteCarer: builder.query({
      query: (params) => ({
        url: "/carer-Info/substitute-cares/list-carer", // BC, SC,RC
        params,
      }),
    }),
    getSubstituteCarerById: builder.query({
      query: (carerId) => ({
        url: `/carer-Info/carer-info/substitute-cares/get-carer/${carerId}`, // BC, SC,RC
      }),
    }),
    postSubstituteCarer: builder.mutation({
      query: (body) => ({
        url: "/carer-Info/carer-info/substitute-cares/add-carer",
        method: "POST",
        body,
      }),
    }),
    editSubstituteCarer: builder.mutation({
      query: ({ body, id }) => ({
        url: `/carer-Info/carer-info/substitute-cares/update-carer/${id}`,
        method: "PATCH",
        body,
      }),
    }),
    deleteSubstituteCarer: builder.mutation({
      query: (id) => ({
        url: `/carer-Info/carer-info/substitute-cares/delete-carer/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetSelectedSubstituteCarerQuery,
  usePostSubstituteCarerMutation,
  useGetSubstituteCarerByIdQuery,
  useLazyGetSubstituteCarerByIdQuery,
  useDeleteSubstituteCarerMutation,
  useEditSubstituteCarerMutation,
} = substituteCarerApi;
