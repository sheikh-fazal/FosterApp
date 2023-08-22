import { useTheme } from "@mui/material";
import {
  useLazySingleAllegetionListQuery,
  usePatchAllegationListMutation,
  usePostAllegationListMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/allegationApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { defaultValues, formSchema } from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
export const useAnnualReviewCForm = (action: any, id: any) => {
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = useState(false);
  //API For Getting Single Details
  const [getAllegationList] = useLazySingleAllegetionListQuery();
  //API For Posting Allegation Form
  const [postAllegationDetails] = usePostAllegationListMutation();
  //API For Patch Allegation List
  const [editAllegationList] = usePatchAllegationListMutation();

  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getAllegationList(id, true);
      setIsLoading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return defaultValues;
      }
      const responseData = { ...data.data };
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
  const onSubmit = async (data: any) => {
    if (action === "add") {
      setIsFetching(true);
      postAllegationDetails({
        params: {
          fosterCarerId: fosterCarerId,
        },
        body: data,
      })
        .unwrap()
        .then((res: any) => {
          setIsFetching(false);
          enqueueSnackbar("Allegation Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/carer-info/personal-info/carer-chronology-of-events/allegation",
            query: {
              action: "edit",
              id: `${res?.data.id}`,
              fosterCarerId: fosterCarerId,
            },
          });
        })
        .catch((error) => {
          setIsFetching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push({
            pathname: "/carer-info/personal-info/carer-chronology-of-events",
            query: { fosterCarerId: fosterCarerId },
          });
        });
    } else if (action === "edit") {
      setIsFetching(true);
      const formData = {
        id,
        ...data,
      };
      editAllegationList(formData)
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Allegation Edited Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/carer-info/personal-info/carer-chronology-of-events",
            query: { fosterCarerId: fosterCarerId },
          });
          setIsFetching(false);
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push({
            pathname: "/carer-info/personal-info/carer-chronology-of-events",
            query: { fosterCarerId: fosterCarerId },
          });
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
    fosterCarerId,
  };
};