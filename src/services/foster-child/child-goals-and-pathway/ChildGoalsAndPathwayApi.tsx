import { baseAPI } from "@root/services/baseApi";

export const childGoalsAndPathwayApi = baseAPI.injectEndpoints({
  endpoints: (builder: any) => ({
    getChildPersonalGoalsList: builder.query({
      query: ({ search, limit, offset }: any) => ({
        url: `foster-child/personalgoal/list-personal-goal-info?limit=10&offset=0`,
        params: search,
        limit,
        offset,
      }),
    }),
  }),
});

export const { useGetChildPersonalGoalsListQuery } = childGoalsAndPathwayApi;
