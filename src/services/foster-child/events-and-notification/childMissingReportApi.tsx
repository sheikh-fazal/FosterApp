import { baseAPI, TAGS } from "@root/services/baseApi";

export const childMissingPlacementApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    postChildMissingPlacementKnown: builder.mutation({
      query: ({ body, fosterChildId }: any) => ({
        url: `/events-and-notification/missing-known-placement/${fosterChildId}`,
        method: "POST",
        body,
      }),
    }),
    postChildMissingPlacementUnKnown: builder.mutation({
      query: ({ body, fosterChildId }: any) => ({
        url: `/events-and-notification/missing-unknown-placement/${fosterChildId}`,
        method: "POST",
        body,
      }),
    }),
    //Documents
    getChildMissingPlacementDocs: builder.query({
      query: (params: any) => ({
        url: `/events-and-notification/missing-placement/uploaded-documents/List`,
        // ?search=xyz-122&limit=10&offset=0&recordId=63a32044f4df02ffb06b7e16
        method: "GET",
        params,
      }),
      providesTags: ["CHILD_MISSING_PLACEMENT_DOCS"],
    }),
    postChildMissingPlacementDocs: builder.mutation({
      query: (formData: any) => ({
        url: "/events-and-notification/missing-placement/uploaded-documents",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["CHILD_MISSING_PLACEMENT_DOCS"],
    }),
    deleteChildMissingPlacementDocs: builder.mutation({
      query: (id: any) => ({
        url: `/events-and-notification/missing-placement/uploaded-document/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CHILD_MISSING_PLACEMENT_DOCS"],
    }),
  }),
});

export const {
  useGetChildMissingPlacementDocsQuery,
  useDeleteChildMissingPlacementDocsMutation,
  usePostChildMissingPlacementDocsMutation,
  //FORMS
  usePostChildMissingPlacementKnownMutation,
  usePostChildMissingPlacementUnKnownMutation,
} = childMissingPlacementApi;
