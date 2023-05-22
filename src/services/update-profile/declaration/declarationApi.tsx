import { baseAPI } from "@root/services/baseApi";

const TAG = "UPDATE_PROFILE";

export const declarationApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getReferenceInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=reference",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateDeclarationInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {} = declarationApi;
