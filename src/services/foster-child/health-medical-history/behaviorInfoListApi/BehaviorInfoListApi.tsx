import { baseAPI } from "@root/services/baseApi";
const BehaviorInfoList = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    behaviorInfoList: builder.query({
      query: (payload: any) => ({
        url: `/foster-child/behavioural-info/foster-child/${payload.fosterChildId}`,
        method: "GET",
        params: payload,
      }),
    }),
  }),
});

export const { useBehaviorInfoListQuery } = BehaviorInfoList;
