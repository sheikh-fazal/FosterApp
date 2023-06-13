import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema, defaultValues, formData } from ".";

import { enqueueSnackbar } from "notistack";
import {
  usePostExPartnerDetailMutation,
  useUpdateExPartnerDetailMutation,
} from "@root/services/carer-info/personal-info/application-form/ExPartnersApi";

export const useExPartnersViewForm = (props: any) => {
  const { exPartnerData, viewData, apllicationFormid, changeView } = props;

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: viewData == "add" ? defaultValues : exPartnerData,
  });
  let [postExPartnerDetail, { isLoading }] = usePostExPartnerDetailMutation();
  let [updateExPartnerDetail] = useUpdateExPartnerDetailMutation();
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
      firstName,
      lastName,
      email,
      address,
      middleName,
      phoneNumber,
      relationShipType,
      childrenTogether,
    } = data;
    let formData = {
      firstName,
      middleName,
      lastName,
      address,
      email,
      phoneNumber,
      relationShipType,
      childrenTogether,
    };
    if (Formtype == "add") {
      try {
        const res: any = await postExPartnerDetail({
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
        const res: any = await updateExPartnerDetail({
          id: data?.id,
          formData,
        }).unwrap();
        if (res.data) {
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
