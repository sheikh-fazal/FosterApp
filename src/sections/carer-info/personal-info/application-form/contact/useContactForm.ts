import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { fTimestamp } from "@root/utils/formatTime";
import { useTheme } from "@mui/material";
import { useUpdateContactMutation } from "@root/services/carer-info/personal-info/application-form/ContactApi";
import { enqueueSnackbar } from "notistack";

export const useContactForm = (data: any, apllicationFormid: any) => {
  const theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: data,
  });
  const [updateContact, { isLoading }] = useUpdateContactMutation({});
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (formData: any) => {
    try {
      let res: any = await updateContact({
        id: apllicationFormid,
        formData,
      }).unwrap();
      console.log("sadasd", res?.data);
      if (res.data) {
        reset({
          ...res?.data?.contact,
        });
        enqueueSnackbar("Record Updated Successfully", { variant: "success" });
      }
    } catch (error) {}
    // console.log("data", formData);
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
