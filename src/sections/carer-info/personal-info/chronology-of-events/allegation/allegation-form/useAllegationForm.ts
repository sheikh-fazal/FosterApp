import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useLazySingleAllegetionListQuery,
  usePatchAllegationListMutation,
  usePostAllegationListMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/allegationApi";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useAllegationForm = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme: any = useTheme();
  const [error, setError] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const [getAllegationList] = useLazySingleAllegetionListQuery();
  const [postAllegationDetails] = usePostAllegationListMutation();
  const [editAllegationList] = usePatchAllegationListMutation();
  const addAllegations = async (data: any) => {
    //Post API Integration
    let formData = {
      ...data,
      allegationDate: dayjs(data?.allegationDate).format("MM/DD/YYYY"),
      agencyReportedDate: dayjs(data?.agencyReportedDate).format("MM/DD/YYYY"),
      reviewDate: dayjs(data?.reviewDate).format("MM/DD/YYYY"),
      registeredManagerInformedDate: dayjs(
        data?.registeredManagerInformedDate
      ).format("MM/DD/YYYY"),
      ofstedNotifiedDate: dayjs(data?.ofstedNotifiedDate).format("MM/DD/YYYY"),
      closureDate: dayjs(data?.closureDate).format("MM/DD/YYYY"),
      nextAlertDate: dayjs(data?.nextAlertDate).format("MM/DD/YYYY"),
    };
    try {
      await postAllegationDetails(formData);
      enqueueSnackbar("Allegation Added Successfully", {
        variant: "success",
      });
      router.push("/carer-info/personal-info/carer-chronology-of-events");
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  const editAllegations = async (data: any) => {
    //Patch API Integration
    let formData = {
      ...data,
      allegationDate: dayjs(data?.allegationDate).format("MM/DD/YYYY"),
      agencyReportedDate: dayjs(data?.agencyReportedDate).format("MM/DD/YYYY"),
      reviewDate: dayjs(data?.reviewDate).format("MM/DD/YYYY"),
      registeredManagerInformedDate: dayjs(
        data?.registeredManagerInformedDate
      ).format("MM/DD/YYYY"),
      ofstedNotifiedDate: dayjs(data?.ofstedNotifiedDate).format("MM/DD/YYYY"),
      closureDate: dayjs(data?.closureDate).format("MM/DD/YYYY"),
      nextAlertDate: dayjs(data?.nextAlertDate).format("MM/DD/YYYY"),
    };
    try {
      await editAllegationList(formData);
      enqueueSnackbar("Allegation Edited Successfully", {
        variant: "success",
      });
      router.push("/carer-info/personal-info/carer-chronology-of-events");
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  return {
    router,
    tableHeaderRefTwo,
    getAllegationList,
    postAllegationDetails,
    addAllegations,
    editAllegations,
    editAllegationList,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    error,
    setError,
    isLoading,
    setIsLoading,
    theme,
  };
};
