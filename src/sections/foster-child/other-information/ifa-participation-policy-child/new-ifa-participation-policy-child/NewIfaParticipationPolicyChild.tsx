import { Button, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import Link from "next/link";
import { IfaParticipationPolicyData } from ".";
import useNewIfaParticipationPolicyChild from "./useNewIfaParticipationPolicyChild";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

const NewIfaParticipationPolicyChild = (props: any) => {
  const {
    disabled,
    onSubmitHandler,
    handleCloseForm,
    router,
    formState,
    postExclusionInfo,
    value,
    setValue,
  } = props;

  const { methods, handleSubmit, onSubmit } =
    useNewIfaParticipationPolicyChild();

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {IfaParticipationPolicyData?.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                <>
                  <Grid>
                    <form.component
                      disabled={disabled}
                      size="small"
                      {...form.otherOptions}
                    >
                      {form.otherOptions
                        ? form.options?.map((option: any) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))
                        : null}
                    </form.component>
                  </Grid>
                </>
              </Grid>
            );
          })}

          <Grid container columnSpacing={4} mt={3}>
            <Grid item xs={12} md={6} ml={3}>
              <RHFTextField
                label="Would you like to go again next time?"
                size="small"
                fullWidth
                name=""
                {...methods}
                disabled={props.disabled}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography component="legend">
                Whats your rating on this event?
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                {...methods}
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button size="large" type="submit" variant="contained">
              Submit
            </Button>
            <Link href={"/recruitment"}>
              <Button
                type="button"
                sx={{
                  color: "#fff",
                  ml: 1,
                  backgroundColor: "#F6830F",
                }}
                size="large"
                variant="contained"
              >
                Back
              </Button>
            </Link>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
};

export default NewIfaParticipationPolicyChild;
