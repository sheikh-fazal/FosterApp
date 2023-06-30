import { useState } from "react";
import { useRouter } from "next/router";
import { gpDetailsInfoTableColumnsFunction, GPDETAILSLISTPAGELIMIT } from ".";
import { useGetAllGpDetailsListDataQuery } from "@root/services/foster-child/health-medical-history/gp-details/gpDetailsInfo";

export const useGPDetailsList = () => {
  const router = useRouter();

  const gpDetailsInfoTableColumns = gpDetailsInfoTableColumnsFunction(router);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    search: searchValue,
    offset: page,
    limit: GPDETAILSLISTPAGELIMIT,
  };

  const apiDataParameter = { params };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllGpDetailsListDataQuery(apiDataParameter,{
      refectchOnMountOrArgChange:true
    });

  return {
    gpDetailsInfoTableColumns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    router,
    setPage,
    GPDETAILSLISTPAGELIMIT
  };
};
