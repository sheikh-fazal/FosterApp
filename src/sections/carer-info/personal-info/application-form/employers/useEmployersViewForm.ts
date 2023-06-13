import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import { fTimestamp } from "@root/utils/formatTime";
import { useTheme } from "@mui/material";
import { FormSchema, defaultValues, formData } from ".";

import { enqueueSnackbar } from "notistack";
import {
  usePostEmployerDetailMutation,
  useUpdateEmployerDetailMutation,
} from "@root/services/carer-info/personal-info/application-form/EmployersApi";

export const useEmployersViewForm = (props: any) => {
  const { employerData, viewData, apllicationFormid, changeView } = props;

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues:
      viewData == "add"
        ? defaultValues
        : {
            ...employerData,
            suitableDate: new Date(employerData?.suitableDate),
          },
  });
  let [postEmployerDetail, { isLoading }] = usePostEmployerDetailMutation();
  let [updateEmployerDetail] = useUpdateEmployerDetailMutation();
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const ApiCall = async (data: any, Formtype: any) => {
    let {
      employerType,
      companyName,
      contactName,
      disciplinaryCareer,
      durationOfEmploymentAndPost,
      noticePeriod,
      phone,
      email,
      address,
      suitableDate,
    } = data;
    let formData = {
      employerType,
      companyName,
      contactName,
      disciplinaryCareer,
      durationOfEmploymentAndPost,
      noticePeriod,
      email,
      phone,
      address,
      suitableDate,
    };
    if (Formtype == "add") {
      try {
        const res: any = await postEmployerDetail({
          apllicationFormid,
          formData,
        }).unwrap();
        if (res.data) {
          changeView(null);
          enqueueSnackbar("Record added Successfully", {
            variant: "success",
          });
          reset();
        }
      } catch (error: any) {
        enqueueSnackbar(error?.data?.message, {
          variant: "error",
        });
      }
    }
    if (Formtype == "edit") {
      try {
        const res: any = await updateEmployerDetail({
          id: data?.id,
          formData,
        }).unwrap();
        if (res.data) {
          changeView(null);
          enqueueSnackbar("Record Updated Successfully", {
            variant: "success",
          });
        }
      } catch (error: any) {
        enqueueSnackbar(error?.data?.message, {
          variant: "error",
        });
      }
    }
  };

  const onSubmit = async (data: any) => {
    ApiCall(data, viewData);
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
  };
};
