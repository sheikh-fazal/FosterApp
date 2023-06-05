import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { fTimestamp } from "@root/utils/formatTime";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { usePostAddressHistoryMutation } from "@root/services/carer-info/personal-info/carer-address-history/CarerAddressHistoryApi";
import { enqueueSnackbar } from "notistack";

export const useCarerAddressHistoryForms = (formType: any) => {
  let theme = useTheme();
  let router = useRouter();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;
  let [postAddressHistory, { isLoading }] = usePostAddressHistoryMutation();
  const onSubmit = async (data: any) => {
    if (formType == "add") {
      postAddressHistory({ formData: data })
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Record Added Successfully", {
            variant: "success",
          });
          router.push("/carer-info/personal-info/carer-address-history");
          reset();
        })
        .catch((error) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (formType == "edit") {
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    router,
  };
};
