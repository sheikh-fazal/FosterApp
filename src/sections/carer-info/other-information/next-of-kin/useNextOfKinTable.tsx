import { useNextofkinListQuery } from "@root/services/carer-info/other-information/nextOfKinApi";
import React from "react";

const useNextOfKinTable = () => {
  const { data, isLoading, isSuccess, isFetching, isError } =
    useNextofkinListQuery({});
  return {
    nextOfKinList: data,
    nextOfKinIsloading: isLoading,
    nextOfKinIsSuccess: isSuccess,
    nextOfKinIsFetching: isFetching,
    nextOfKinIsError: isError,
  };
};

export default useNextOfKinTable;
