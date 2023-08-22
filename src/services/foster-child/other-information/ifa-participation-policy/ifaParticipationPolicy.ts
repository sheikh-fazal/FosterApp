import { baseAPI } from "@root/services/baseApi";
export const IfaParticipationPolicy = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    postIfaParticiaptionPolicy: builder.mutation({
      query: ({ data, fosterChildId }: any) => ({
        url: `/ifa-participation?fosterCarerId=${fosterChildId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["IFA-PARTICIPATION-POLICY"],
    }),
   
  }),
});
export const {
 usePostIfaParticiaptionPolicyMutation
} = IfaParticipationPolicy;