import { baseAPI } from "@root/services/baseApi";

export const FamilyPersonListAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    
    //Get API of Family Person List
    GetFamilyPersonList: builder.query<null, object>({
      query: (search: any) => ({
        url: "/foster-child/child-info/family-org-involved/list-fc-family-org-involved",
        method: "GET",
        param: search,
      }),
    }),

  }),
});

export const { useGetFamilyPersonListQuery } = FamilyPersonListAPI;
