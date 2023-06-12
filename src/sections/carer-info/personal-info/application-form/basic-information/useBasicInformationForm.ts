import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import { fTimestamp } from "@root/utils/formatTime";
import { useTheme } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useUpdateBasicInformationMutation } from "@root/services/carer-info/personal-info/application-form/BasicInformationApi";

export const useBasicInformationForm = (data: any, id: any) => {
  const theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: data,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = methods;
  const [updateBasicInformation, { isLoading }] =
    useUpdateBasicInformationMutation();
  const onSubmit = async (data: any) => {
    console.log(data);
    var form_data = new FormData();
    for (var key in data) {
      if (key !== "media") {
        form_data.append(key, data[key]);
      }
    }
    form_data.append("image", data?.media);

    try {
      const res: any = await updateBasicInformation({
        formData: form_data,
        id: id,
      }).unwrap();
      if (res.data) {
        enqueueSnackbar("Record Updated Successfully", { variant: "success" });
      }
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
  };
};
