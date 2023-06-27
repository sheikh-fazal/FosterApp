import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { defaultValues, formSchema, formatters } from "./DayLogData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useLazyGetChildChronologyOfEventsDayLogByIdQuery,
  usePatchChildChronologyOfEventsDayLogByIdMutation,
  usePostChildChronologyOfEventsDayLogMutation,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/DayLogAPI";

export const useDayLogForm = () => {
  const router = useRouter();
  const { action, id, fosterChildId } = router.query;
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = useState(false);
  //API For Getting Single Details
  const [getDayLogList] = useLazyGetChildChronologyOfEventsDayLogByIdQuery();

  //API For Posting Car Insurance Form
  const [postDayLogData] = usePostChildChronologyOfEventsDayLogMutation();
  //API For Patch Car Insurance List
  const [editDayLogList] = usePatchChildChronologyOfEventsDayLogByIdMutation();

  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getDayLogList(id, true);
      setIsLoading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return defaultValues;
      }
      const responseData = { ...data.data };
      for (const key in responseData) {
        const value = responseData[key];
        if (formatters[key]) responseData[key] = formatters[key](value);
      }
      return responseData;
    } else {
      setIsLoading(false);
      return defaultValues;
    }
  };
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: getDefaultValue,
  });

  const {
    setValue,
    trigger,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = methods;

  //OnSubmit Function
  const onSubmit = async (data: any) => {
    if (action === "add") {
      setIsFetching(true);
      postDayLogData({ ...data, fosterChildId })
        .unwrap()
        .then((res: any) => {
          setIsFetching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          // router.push({
          //   pathname: "/carer-info/background-checks/statutory-checks-list/car-insurance",
          //   query: { action: "edit", id: `${res?.data.id}` },
          // });
        })
        .catch((error: any) => {
          setIsFetching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          // router.push("/carer-info/background-checks/statutory-checks-list");
        });
    } else if (action === "edit") {
      setIsFetching(true);
      const formData = {
        id,
        ...data,
      };
      editDayLogList(formData)
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Information Edited Successfully", {
            variant: "success",
          });
          // router.push("/carer-info/background-checks/statutory-checks-list/car-insurance");
          setIsFetching(false);
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          // router.push("/carer-info/background-checks/statutory-checks-list/car-insurance");
          setIsFetching(false);
        });
    } else {
      return null;
    }
  };
  return {
    router,
    onSubmit,
    isLoading,
    getDefaultValue,
    theme,
    setValue,
    trigger,
    handleSubmit,
    getValues,
    methods,
    isFetching,
    isSubmitting,
    action,
    id,
  };
};
