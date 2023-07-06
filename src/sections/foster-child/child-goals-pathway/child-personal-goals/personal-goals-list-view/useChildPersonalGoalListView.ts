import { RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material";
// import {
//   // childPersonalGoalListViewData,
//   //  FormSchema,
//   defaultValues,
// } from ".";
import { useGetChildPersonalViewDataQuery } from "@root/services/foster-child/child-goals-and-pathway/ChildGoalsAndPathwayApi";
import { childPersonalGoalListViewData } from ".";

export const useChildPersonalGoalListView = () => {
  const [childPersonalGoalViewData] = React.useState(childPersonalGoalListViewData)
  const router = useRouter();
  const { id, childId } = router.query;
  const todayDate = dayjs().format("MM/DD/YYYY");

  const defaultValues = {
    goalName: "text",
    status: "456123.0",
    date: new Date(todayDate),
    comments: "43rtertretretre",
  };
  // const FormSchema = Yup.object().shape({
  //   // inspectionDate: Yup.date().required("Required"),
  //   // nextInspectedDate: Yup.date().required("Date is required"),
  //   // dateToBeCarriedOutOne: Yup.date().required("Required"),
  //   // improvementsRequireOne: Yup.string().required("Required"),
  //   // dateToBeCarriedOutTwo: Yup.date().required("Required"),
  //   // improvementsRequireTwo: Yup.string().required("Required"),
  //   // dateToBeCarriedOutThree: Yup.date().required("Required"),
  //   // improvementsRequireThree: Yup.string().required("Required"),
  //   // dateToBeCarriedOutFour: Yup.date().required("Required"),
  //   // improvementsRequireFour: Yup.string().required("Required"),
  // });

  // const childPersonalGoalListViewData = [
  //   {
  //     id: 0.5,
  //     variant: "subtitle2",
  //     heading: `Personal Goals`,
  //   },
  //   {
  //     id: 1,
  //     componentProps: {
  //       name: "goalName",
  //       fullWidth: true,
  //       label: "Goal Name",
  //       multiline: true,
  //       //   minRows: 3,
  //     },
  //     gridLength: 6,

  //     component: RHFTextField,
  //   },
  //   {
  //     id: 2,
  //     componentProps: {
  //       name: "status",
  //       label: "Status",
  //       multiline: true,
  //       fullWidth: true,
  //       //   minRows: 3,
  //     },
  //     gridLength: 6,
  //     component: RHFTextField,
  //   },
  //   {
  //     id: 3,
  //     gridLength: 6,
  //     componentProps: {
  //       fullWidth: true,
  //       name: "date",
  //       label: "Date",
  //     },
  //     component: RHFDatePicker,
  //   },
  //   {
  //     id: 4,
  //     gridLength: 12,
  //     componentProps: {
  //       fullWidth: true,
  //       name: "comments",
  //       label: "Comments",
  //     },
  //     component: RHFTextField,
  //   },
  // ];

  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetChildPersonalViewDataQuery({ id: id, fosterChildId: childId });
  console.log(data);
  const theme: any = useTheme();
  const methods: any = useForm({
    // resolver: yupResolver(FormSchema),
    defaultValues,
  });
  // const { handleSubmit } = methods;
  // const onSubmit = (data: any) => {
  //   formData(data);
  // };

  return {
    defaultValues,
    router,
    theme,
    childPersonalGoalViewData,
    methods,
    isLoading,
    isSuccess,
    isFetching,
    isError,
  };
};
