import { baseAPI } from "@root/services/baseApi";
export const IfaParticipationPolicy = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    postIfaParticiaptionPolicy: builder.mutation({
      query: ({ body, fosterChildId }: any) => ({
        url: `/ifa-participation?fosterCarerId${fosterChildId}`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["IFA-PARTICIPATION-POLICY"],
    }),
   
  }),
});
export const {
 usePostIfaParticiaptionPolicyMutation
} = IfaParticipationPolicy;