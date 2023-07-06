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
    getChildPersonalViewData: builder.query({
      query: ({ id, fosterChildId }: any) => ({
        url: `foster-child/personalGoal/get-personal-goal/${id}?fosterChildId=${fosterChildId}`,
      }),
    }),
  }),
});

export const {
  useGetChildPersonalGoalsListQuery,
  useGetChildPersonalViewDataQuery,
} = childGoalsAndPathwayApi;
