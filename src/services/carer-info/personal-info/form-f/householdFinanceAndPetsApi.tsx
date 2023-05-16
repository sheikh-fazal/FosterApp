import { baseAPI, TAGS } from "@root/services/baseApi";

export const householdFinanceAndPetsAPi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putHouseholdFinance: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/form-f/household-finance",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const { usePutHouseholdFinanceMutation } = householdFinanceAndPetsAPi;
