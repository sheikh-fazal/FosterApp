import { baseAPI, TAGS } from "@root/services/baseApi";
type IPARAM =
  | "frontSheet"
  | "applicationDetails1"
  | "applicationDetails2"
  | "enhancedDBSCheck"
  | "healthApplication1"
  | "healthApplication2"
  | "houseHoldAccommodation"
  | "informationDate"
  | "verificationApplication1"
  | "verificaitonApplication2"
  | "courtProceedings"
  | "householdFinance"
  | "aboutApplicants"
  | "specialistReports"
  | "summaryAndRecommendation"
  | "applicantsObservation";

export const formFAll = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    formF: builder.query({
      query: (param: IPARAM) => `/carer-Info/From-f/get-all?value=${param}`,
    }),
    formFOtherInfo: builder.query({
      query: (formFId) => `/carer-Info/get-other-materials/${formFId}`,
    }),
  }),
});

export const { useFormFQuery, useLazyFormFQuery, useFormFOtherInfoQuery } =
  formFAll;
