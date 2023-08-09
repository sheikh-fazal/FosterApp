import { useTableParams } from "@root/hooks/useTableParams";
import {
  useAllegationListQuery,
  useDeleteAllegationListMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/allegationApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useAnnualReviewTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Allegation List
  const {
    data: annualReviewlist,
    isError: annualReviewListError,
    isLoading: annualReviewListIsloading,
    isFetching: annualReviewlistIsfetching,
    isSuccess: annualReviewListIsSuccess,
  }: any = useAllegationListQuery({
    params: {
      fosterCarerId: fosterCarerId,
      search: search,
      ...params,
    },
  });
  const annualReviewList = annualReviewlist?.data?.allegation;
  const meta = annualReviewlist?.data?.meta;
  const [deleteList] = useDeleteAllegationListMutation();
  //DELETE API For Allegation List
  const listDeleteHandler = (id: any) => {
    deleteList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return {
    router,
    tableHeaderRefTwo,
    annualReviewList,
    annualReviewListIsloading,
    annualReviewlistIsfetching,
    annualReviewListError,
    annualReviewListIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    listDeleteHandler,
    setSearch,
    fosterCarerId,
  };
};
