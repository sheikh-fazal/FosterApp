import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { CForm, CFormValidationSchema, defaultValues } from "./";
import { enqueueSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";

export default function PetQuestionnaireC({
  disabled,
  onSubmitHandler,
  initialValueProps = defaultValues,
  message,
}: any) {
  const methods: any = useForm({
    resolver: yupResolver(CFormValidationSchema),
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

    formData.append("socialWorkerObservations", data?.socialWorkerObservations);
    formData.append("significanceOfAnimal", data?.significanceOfAnimal);
    formData.append("foreseeableRisks", data?.foreseeableRisks);
    formData.append("nameOfSocialWorker", data?.nameOfSocialWorker);
    formData.append("date", data?.date);
    formData.append(
      "signatureOfAssessingSocialWorker",
      data?.signatureOfAssessingSocialWorker
    );

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
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {CForm?.map((item: any) => (
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
            >
              Next
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
