import { baseAPI } from "@root/services/baseApi";

const TAG = "UPDATE_PROFILE";

export const safeCarePolicyApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    safeCarePolicyList: builder.query({
      query: (dataParameter) => ({
        url: "foster-child/gp-info/all",
        method: "GET",
        params: dataParameter.params,
      }),
      providesTags: [TAG],
      transformResponse: (res) => {
        return [
          { a: "a1", b: "b", c: "c", d: "d", e: "e", f: "f" },
          { a: "a2", b: "b", c: "c", d: "d", e: "e", f: "f" },
          { a: "a3", b: "b", c: "c", d: "d", e: "e", f: "f" },
          { a: "a4", b: "b", c: "c", d: "d", e: "e", f: "f" },
          { a: "a5", b: "b", c: "c", d: "d", e: "e", f: "f" },
        ].sort((a, b) => 0.5 - Math.random());
      },
    }),
    addReference: builder.mutation<null, void>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useSafeCarePolicyListQuery } = safeCarePolicyApi;
