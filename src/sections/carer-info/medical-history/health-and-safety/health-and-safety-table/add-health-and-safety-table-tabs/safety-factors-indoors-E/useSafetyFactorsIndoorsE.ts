import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import usePath from "@root/hooks/usePath";
import { enqueueSnackbar } from "notistack";

export const useSafetyFactorsIndoorsE = ({
  breadCrumbData,
  formData,
  onSubmitHandler,
  initialValueProps,
  message,
}: any) => {
  const theme: any = useTheme();
  const router = useRouter();

  const { healthAndSafetyId } = router.query;

  const { makePath } = usePath();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data: any) => {
    // formData(data);
    try {
      const updatedData = {
        ...data,
        healthAndSafetyId,
        // registeredAVet: registeredAVet === "Yes" ? true : false,
      };
      const res: any = await onSubmitHandler(updatedData).unwrap();
      enqueueSnackbar(
        res?.message,
        { variant: "success" }
        // res?.message ?? `Pet Questionnaire ${message} Successfully!`,
        // {
        //   variant: "success",
        // }
      );
    } catch (error: any) {
      console.log(error);

      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong", { variant: "error" });
    }
    // await submitFunction();
    // console.log(data);
  };
  useEffect(() => {
    breadCrumbData("Safety Factors - Indoors E");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    theme,
    handleSubmit,
    isSubmitting,
    router,
    methods,
    makePath,
    onSubmit,
  };
};
