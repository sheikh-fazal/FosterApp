import { useTableParams } from "@root/hooks/useTableParams";
import { useAnnualReviewListQuery } from "@root/services/carer-info/personal-info/chronology-of-events/annual-review-api/annualReviewApi";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export const useTrainingDetailsTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Training Details List
  const {
    data: annualReviewList,
    isError: annualReviewListError,
    isLoading: annualReviewListIsloading,
    isFetching: annualReviewListIsfetching,
    isSuccess: annualReviewListIsSuccess,
  }: any = useAnnualReviewListQuery({
    params: {
      fosterCarerId: fosterCarerId,
      search: search,
      ...params,
    },
  });

  //Getting API data and Meta
  const annualReviewData = annualReviewList?.data?.annual_review;
  const meta = annualReviewList?.data?.meta;

  return {
    tableHeaderRefTwo,
    annualReviewListIsloading,
    annualReviewData,
    annualReviewListIsfetching,
    annualReviewListError,
    annualReviewListIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
  };
};
