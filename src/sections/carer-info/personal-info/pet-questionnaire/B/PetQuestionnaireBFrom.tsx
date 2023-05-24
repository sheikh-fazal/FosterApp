import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { BForm, BFormValidationSchema, defaultValues } from "./";
import { enqueueSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";

export default function PetQuestionnaireB({
  disabled,
  onSubmitHandler,
  initialValueProps = defaultValues,
  message,
  isError,
  isSuccess,
}: any) {
  const methods: any = useForm({
    resolver: yupResolver(BFormValidationSchema),
    defaultValues: initialValueProps,
  });
  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;

  const { registeredAVet } = watch({ name: "registeredAVet" });

  // Get id from url
  const router = useRouter();
  const query = router.query;
  const id = Object.keys(query)[0];

  const onSubmit = async (data: any) => {
    try {
      const updatedData = {
        ...data,
        id,
        registeredAVet: registeredAVet === "Yes" ? true : false,
      };
      const res: any = await onSubmitHandler(updatedData).unwrap();
      enqueueSnackbar(
        res?.message ?? `Pet Questionnaire ${message} Successfully!`,
        {
          variant: "success",
        }
      );
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        {BForm?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            {registeredAVet !== item.toShow && item?.component && (
              <item.component
                {...item.componentProps}
                disabled={disabled}
                size={"small"}
              >
                {item?.heading}
              </item.component>
            )}
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
              {isError ? "Try Again!" : isSuccess ? "Success" : "Next"}
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
