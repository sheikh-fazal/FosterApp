import { baseAPI } from "@root/services/baseApi";

export const ChildIncidentAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    //Get API of Incident
    getChildIncident: builder.query<null, object>({
      query: ({ params }: any) => ({
        url: "/foster-child/childInfo/list-incident-info",
        method: "GET",
        params,
      }),
      providesTags: ["CHILD_INCIDENT"],
    }),

    // Get API By Id of Incident
    getChildIncidentById: builder.query({
      query: (id: any) => `/foster-child/childInfo/get-incident-info/${id}`,
      providesTags: ["CHILD_INCIDENT"],
    }),

    // Post API of Incident
    postChildIncident: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "/foster-child/absenceInfo/add-absence-info",
        method: "POST",
        param: "",
        body: putDataParameter,
      }),
      invalidatesTags: ["CHILD_INCIDENT"],
    }),

    // Patch API of Incident
    patchChildIncident: builder.mutation({
      query: ({ id, body }) => ({
        url: `/foster-child/childInfo/update-incident-info/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["CHILD_INCIDENT"],
    }),

    // Delete API of Incident
    deleteChildIncident: builder.mutation({
      query: (id: any) => ({
        url: `/foster-child/childInfo/delete-incident-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CHILD_INCIDENT"],
    }),
  }),
});

export const {
  usePostChildIncidentMutation,
  useGetChildIncidentByIdQuery,
  useGetChildIncidentQuery,
  usePatchChildIncidentMutation,
  useDeleteChildIncidentMutation,
} = ChildIncidentAPI;
