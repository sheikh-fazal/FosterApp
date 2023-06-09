import { useRef, useState } from "react";
import { getColumns } from "./columnsInfo";
import { useRouter } from "next/router";
import { useGetAllGpDetailsListDataQuery } from "@root/services/foster-child/health-medical-history/gp-details/gpDetailsList";
import { useSafeCarePolicyListQuery } from "@root/services/foster-child/other-information/safeCarePolicyApi";

export const useSafeCarePolicy = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);

  const params = {
    search: searchValue,
    // offset: page,
    // limit: 10,
  };
  const tableHeaderRef = useRef<any>();

  const columns = getColumns({});

  const dataParameter = { params };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useSafeCarePolicyListQuery(dataParameter);
  console.log({ data });
  return {
    tableHeaderRef,
    columns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
  };
};
