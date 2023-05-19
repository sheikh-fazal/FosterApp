import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const incidentApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    incidentList: builder.query({
      query: () => "chronology-events/incident/List",
      providesTags: ["INCIDENT_LIST"],
    }),
    incidentAddPost: builder.mutation({
      query: (payload: any) => ({
        url: "/chronology-events/incidents",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["INCIDENT_LIST"],
    }),
    incidentById: builder.query({
      query: (id: any) => `/chronology-events/incident/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
    }),
    deleteIncidentByID: builder.mutation({
      query: (id: any) => ({
        url: `/chronology-events/incident/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["INCIDENT_LIST"],
    }),
    // singleIncidentbyId: builder.mutation({
    //   query: (payload: any) => ({
    //     url: "chronology-events/incidents",
    //     method: "Get",
    //     body: payload,
    //   }),
    //   // transformResponse: (response: any) => {
    //   //   response.data.allegationDate = new Date(response.data.allegationDate);
    //   //   response.data.agencyReportedDate = new Date(
    //   //     response.data.agencyReportedDate
    //   //   );
    //   //   response.data.reviewDate = new Date(response.data.reviewDate);
    //   //   response.data.registeredManagerInformedDate = new Date(
    //   //     response.data.registeredManagerInformedDate
    //   //   );
    //   //   response.data.ofstedNotifiedDate = new Date(
    //   //     response.data.ofstedNotifiedDate
    //   //   );
    //   //   response.data.closureDate = new Date(response.data.closureDate);
    //   //   response.data.nextAlertDate = new Date(response.data.nextAlertDate);
    //   //   return response;
    //   // },
    // }),
    // deleteIncidentbyId: builder.mutation({
    //   query: (payload: any) => ({
    //     url: "chronology-events/incidents",
    //     method: "DELETE",
    //     body: payload,
    //   }),
    // }),
  }),
});

export const {
  useIncidentListQuery,
  useIncidentAddPostMutation,
  useLazyIncidentByIdQuery,
useDeleteIncidentByIDMutation
} = incidentApi;
