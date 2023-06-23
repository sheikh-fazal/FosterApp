import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import { useTheme } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import {
  FormSchema,
  immunisationInfoFormValue,
  immunisationInfoListValue,
} from "..";
import {
  usePostImmunisationMutation,
  useUpdateImmunisationMutation,
} from "@root/services/foster-child/health-medical-history/immunisation/ImmunisationApi";

export const useImmunisationForm = ({ action, id, immunisationData }: any) => {
  const theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues:
      action == "add" ? immunisationInfoListValue : immunisationData,
  });
  const {
    trigger,
    setValue,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = methods;
  let [postImmunisation, { isLoading: isLoadingPost }] =
    usePostImmunisationMutation();
  let [updateImmunisation, { isLoading: isLoadingEdit }] =
    useUpdateImmunisationMutation();
  const onSubmit = async (data: any) => {
    let { date, dueDate, type } = data;
    let formData = {
      date,
      dueDate,
      type,
    };
    if (action == "edit") {
      updateImmunisation({ formData, id: id })
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Record Updated Successfully", {
            variant: "success",
          });
        })
        .catch((error) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action == "add") {
      postImmunisation({ formData, id: id })
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Record Added Successfully", {
            variant: "success",
          });
        })
        .catch((error) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    }
  };

  return {
    methods,
    onSubmit,
    handleSubmit,
    theme,
  };
};
