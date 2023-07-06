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

//component function
export default function SubstituteCarerForm(props: any) {
  const { disabled, onSubmit, data: P, status }: any = props;

  const params = useRouter();
  const { data, isSuccess, isError } = useGetSubstituteCarerByIdQuery(
    params.query?.carerId,
    { skip: !!!params.query?.carerId }
  );

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    // defaultValues: disabled ? data : defaultValues,
    defaultValues: {
      ...defaultValues,
      ...data,
      dateOfBirth: new Date(),
      dateOfVisit: new Date(),
    },
  });

  const { reset, handleSubmit } = methods;

  const onSubmitHandler = (data: any) => {
    onSubmit(data);
    reset();
  };
  // updating defaultValues

  // useEffect(() => {
  //   reset((formValues: any) => ({
  //     ...formValues,
  //     ...data,
  //     dateOfBirth: new Date(),
  //     dateOfVisit: new Date(),
  //   }));
  // }, [data]);
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
                disabled={!!!params.query?.carerId}
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
              disabled={status?.isLoading}
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
              {status?.isError ? "Try Again" : "Submit"}
            </LoadingButton>
            <Button
              size="large"
              type="button"
              disabled={status?.isLoading}
              variant="contained"
              color="secondary"
            >
              Save as Draft
            </Button>
            <Button
              size="large"
              disabled={status?.isLoading}
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
  // if (!status?.isSuccess) return <div>Loading . . </div>;
  // if (status?.isSuccess)
  return formEl;
}
