import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Button } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues, SUBSTITUTECARERFORMDATA } from ".";
import Error from "@root/components/Error";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import { useGetSubstituteCarerByIdQuery } from "@root/services/carer-info/substitute-carers/substituteCarerApi";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import dayjs from "dayjs";

//component function
export default function SubstituteCarerForm(props: any) {
  const { disabled, onSubmit, status, onEdit }: any = props;

  const params = useRouter();
  const { data, isSuccess, isError, isLoading } =
    useGetSubstituteCarerByIdQuery(params.query?.carerId, {
      skip: !!!params.query?.carerId,
    });

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    // defaultValues: disabled ? data : defaultValues,
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmitHandler = (data: any) => {
    params.query?.carerId
      ? onEdit({ body: data, id: params.query?.carerId })
      : onSubmit(data);
    // reset();
  };
  // updating defaultValues

  useEffect(() => {
    reset((formValues: any) => ({
      ...formValues,
      ...data?.[0],
      dateOfBirth: new Date(dayjs(data?.[0]?.dateOfBirth).format("MM/DD/YYYY")),
      dateOfVisit: new Date(dayjs(data?.[0]?.dateOfVisit).format("MM/DD/YYYY")),
    }));
  }, [data, reset]);
  console.log(!!params.query?.carerId);
  const formEl = (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container spacing={3}>
        {SUBSTITUTECARERFORMDATA.map((form: any) => {
          return (
            <Grid
              item
              xs={12}
              md={form?.gridLength}
              key={form.id}
              {...form.gridProps}
            >
              <form.component
                size="small"
                {...form.componentProps}
                disabled={params.query?.view}
              >
                {form.componentProps.select
                  ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : form.componentProps.typographytext}
              </form.component>
            </Grid>
          );
        })}
        {!disabled && (
          <Grid item xs={12} container gap={3}>
            <LoadingButton
              loading={status?.isLoading}
              size="large"
              disabled={
                status?.isLoading || params.query?.view || status?.isSuccess
              }
              type="submit"
              color={
                status?.isError
                  ? "error"
                  : status?.isSuccess
                  ? "success"
                  : "primary"
              }
              variant="contained"
            >
              {status?.isError
                ? "Try Again"
                : status?.isSuccess
                ? "Submitted"
                : "Submit"}
            </LoadingButton>
            <Button
              size="large"
              type="button"
              disabled={status?.isLoading || params.query?.view}
              variant="contained"
              color="secondary"
            >
              Save as Draft
            </Button>
            <Button
              size="large"
              disabled={status?.isLoading || params.query?.view}
              type="button"
              variant="contained"
              color="warning"
            >
              Back
            </Button>
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );
  // if (status?.isError) return <Error />;
  // if (status?.isLoading || isLoading) return <SkeletonFormdata />;
  // if (status?.isSuccess)
  // else
  return formEl;
}
