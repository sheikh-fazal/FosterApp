import { useTheme } from "@mui/material";
import {
  useLazySingleAllegetionListQuery,
  usePatchAllegationListMutation,
  usePostAllegationListMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/allegationApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { defaultValues, formSchema, absenceInfoFormData } from ".";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { log } from "console";
export const useAbsenceInfoForm = (props:any) => {
  const router = useRouter();
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const { disabled, defaultValues } = props;
  //API For Getting Single Details
  // const [getAllegationList] = useLazySingleAllegetionListQuery();
  //API For Posting Allegation Form
  // const [postAllegationDetails] = usePostAllegationListMutation();
  //API For Patch Allegation List
  // const [editAllegationList] = usePatchAllegationListMutation();

  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {};
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: absenceInfoFormData,
  });
  const { handleSubmit } = methods;
  const onSubmit = async (data: any) => {
    console.log("data", data);
  };
  return {
    router,
    onSubmit,
    theme,
    handleSubmit,
    methods,
    absenceInfoFormData,
  };
};
