import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { fTimestamp } from "@root/utils/formatTime";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { usePostIndependencePacksMutation } from "@root/services/foster-child/education-records/independence-packs/IndependencePacks";
import dayjs from "dayjs";

export const useIndependencePackFormGold = () => {
  let theme = useTheme();
  let router = useRouter();
  let { fosterChildId } = router.query;

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
  const [postIndependencePacks, { isLoading }] =
    usePostIndependencePacksMutation();

  const onSubmit = async (data: any) => {
    let form_data: any = new FormData();

    for (var key in data) {
      form_data.append(key, data[key]);
    }
    try {
      const res: any = await postIndependencePacks({
        formData: form_data,
        id: fosterChildId,
      }).unwrap();
      if (res.data) {
        enqueueSnackbar("Record Added Successfully", { variant: "success" });
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
    router,
  };
};
