import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { DForm, DFormValidationSchema, defaultValues } from "./";
import { enqueueSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import dayjs from "dayjs";

export default function PetQuestionnaireD({
  disabled,
  onSubmitHandler,
  initialValueProps = defaultValues,
  message,
  isError,
  isSuccess,
}: any) {
  const methods: any = useForm({
    resolver: yupResolver(DFormValidationSchema),
    defaultValues: initialValueProps,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // Get id from url
  const router = useRouter();
  const query = router.query;
  const id = Object.keys(query)[0];

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    formData.append("information1", data?.information1);
    formData.append("information2", data?.information2);
    formData.append("comments", data?.comments);
    formData.append("signature1", data?.signature1);
    formData.append("signature2", data?.signature2);
    formData.append("date1", data?.date1);
    formData.append("date2", data?.date2);

    const updatedData = {
      id,
      formData,
    };

    try {
      const res: any = await onSubmitHandler(updatedData).unwrap();
      enqueueSnackbar(
        res?.message ?? `Pet Questionnaire ${message} Successfully!`,
        {
          variant: "success",
        }
      );
      router.push("/carer-info/personal-info/pet-questionnaire");
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {DForm?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              {...item.componentProps}
              disabled={disabled}
              size={"small"}
            >
              {item?.heading}
            </item.component>
          </Grid>
        ))}
        {!disabled && (
          <Grid item xs={12}>
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ mr: 2 }}
              loading={isSubmitting}
              color={isError ? "error" : isSuccess ? "success" : "primary"}
            >
              {isError ? "Try Again!" : isSuccess ? "Success" : "Submit"}
            </LoadingButton>
            <Link
              href={"/carer-info/personal-info/pet-questionnaire"}
              style={{ textDecoration: "none" }}
            >
              <Button type="button" variant="contained">
                Back
              </Button>
            </Link>
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );
}
