import { useRef, useState } from "react";
import { getColumns } from "./columnsInfo";
import { useRouter } from "next/router";
import { useSafeCarePolicyListQuery } from "@root/services/foster-child/other-information/safeCarePolicyApi";

export const useTherapyInfoList = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState(undefined);

  const params = {
    search: searchValue,
    offset: page,
    limit: 10,
  };
  console.log({ query });
  const tableHeaderRef = useRef<any>();

  const columns = getColumns({ router });

  const dataParameter = { params };
  console.log({ dataParameter });
  const { data, isLoading, isSuccess, isError, isFetching } =
    useSafeCarePolicyListQuery(params);
  return {
    tableHeaderRef,
    columns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    setPage,
    page,
  };
};
