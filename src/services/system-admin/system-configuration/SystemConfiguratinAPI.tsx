import { baseAPI } from "@root/services/baseApi";

export const systemConfigurationAPIs: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getSystemConfigurationList: builder.query({
      query: (params: any) => ({
        url: `/admin/system-config`,
        method: "GET",
        params,
      }),
      providesTags: ["SYSTEM-CONFIGURATION"],
    }),
    deleteSystemConfigurationList: builder.mutation({
      query: (params: any) => ({
        url: `/admin/system-config`,
        method: "DELETE",
        params,
      }),
      invalidatesTags: ["SYSTEM-CONFIGURATION"],
    }),
  }),
});

export const {
  useGetSystemConfigurationListQuery,
  useDeleteSystemConfigurationListMutation,
} = systemConfigurationAPIs;
