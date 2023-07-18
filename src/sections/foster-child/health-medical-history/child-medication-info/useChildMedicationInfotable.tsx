import { useTableParams } from "@root/hooks/useTableParams";
import {
  useCreateChildMedicationInfoMutation,
  useGetChildMedicationInfoQuery,
} from "@root/services/foster-child/health-medical-history/child-medication-info/ChildMedicationInfo";

import React, { useState } from "react";

const useChildMedicationInfotable = (props: any) => {
  const { fosterChildId, ChildMedicationInfoId } = props;
  const [search, setSearch] = useState("");

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const {
    // data: hospitalInfolistdata,
    // isError: hospitalInfolistIserror,
    // isLoading: hospitalInfolistisLoading,
    // isFetching: hospitalInfolistisFetching,
    // isSuccess: hospitalInfolistisSuccess,
    data: childMedicationInfotabledata,
    isError: childMedicationInfotableIserror,
    isLoading: childMedicationInfotableisLoading,
    isFetching: childMedicationInfotableisFetching,
    isSuccess: childMedicationInfotableSuccess,
    // } = useGetHospitalInfoListQuery({
  } = useGetChildMedicationInfoQuery({
    ...params,
    search: search,
    fosterCarerId: fosterChildId,
  });

  return {
    childMedicationInfotabledata,
    childMedicationInfotableIserror,
    childMedicationInfotableisLoading,
    childMedicationInfotableisFetching,
    childMedicationInfotableSuccess,

    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
  };
};

export default useChildMedicationInfotable;
