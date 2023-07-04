import { RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material";
// import {
//   // childPersonalGoalListViewData,
//   //  FormSchema,
//   defaultValues,
// } from ".";
import { useLazyGetChildPersonalViewDataQuery } from "@root/services/foster-child/child-goals-and-pathway/ChildGoalsAndPathwayApi";
import { childPersonalGoalListViewData } from ".";
import { enqueueSnackbar } from "notistack";

export const useChildPersonalGoalListView = () => {
  const [childPersonalGoalViewData] = React.useState(
    childPersonalGoalListViewData
  );
  const router = useRouter();
  const { id, childId } = router.query;
  const todayDate = dayjs().format("MM/DD/YYYY");
  const defaultValuesMain = {
    goalName: "NA",
    status: "NA",
    date: new Date(todayDate),
    comments: "43rtertretretre",
  };
  const formatters: any = {};
  const da ={ id: id, fosterChildId: childId }
  const [getChildPersonalView] = useLazyGetChildPersonalViewDataQuery();
  // useGetChildPersonalViewDataQuery({ id: id, fosterChildId: childId });
  const [isLoading1, setIsLoading] = React.useState(true);
  const getDefaultValue = async () => {
    console.log("hello");
    const { data, isError,isLoading } = await getChildPersonalView(da,true);
    console.log("hello 2" );  
    setIsLoading(false);
    console.log(data,isError);
    if (isError) {
      enqueueSnackbar("Error occured", { variant: "error" });
      return defaultValuesMain;
    }
    const responseData = {
      goalName: "NA", 
      status: "NA",
      date: new Date(todayDate),
      comments: "43rtertretretre",
    };

    return responseData;
  };
  const methods: any = useForm({
    defaultValues: getDefaultValue,
  });
console.log(isLoading1);


  // console.log(defaultValues);
  const theme: any = useTheme();

  return {
    router,
    theme,
    childPersonalGoalViewData,
    methods,
    // isLoading,
    // isSuccess,
    // isFetching,
    // isError,
  };
};
