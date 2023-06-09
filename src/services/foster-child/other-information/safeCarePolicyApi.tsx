import { baseAPI } from "@root/services/baseApi";

const TAG = "UPDATE_PROFILE";

export const safeCarePolicyApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    safeCarePolicyList: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=reference",
        method: "GET",
      }),
      providesTags: [TAG],
      transformResponse: (res) => {
        return [
          { a: "a", b: "b", c: "c", d: "d", e: "e", f: "f" },
          { a: "a", b: "b", c: "c", d: "d", e: "e", f: "f" },
        ];
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
