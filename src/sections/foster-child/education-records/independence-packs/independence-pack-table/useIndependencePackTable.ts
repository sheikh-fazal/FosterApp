import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetIndependencePacksQuery } from "@root/services/foster-child/education-records/independence-packs/IndependencePacks";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useRef } from "react";

export const useIndependencePackTable = () => {
  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const { fosterChildId } = router.query;
  const theme: any = useTheme();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  // ----------------------------------------------------------------------

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetIndependencePacksQuery({ id: fosterChildId, params });
  const Independentpacks = data?.data?.Independentpacks;
  const meta = data?.data?.meta;

  return {
    router,
    tableHeaderRef,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    theme,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    Independentpacks,
    meta,
  };
};
