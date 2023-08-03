import { Button, Grid } from "@mui/material";
import React from "react";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import Link from "next/link";
import { OriginalChildReferralData } from ".";
import useOrignalChildReferral from "./useOrignalChildReferral";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

const ViewOriginalChild = (props: any) => {
  const { methods, onSubmit, handleSubmit } = useOrignalChildReferral();

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {/* <Grid container columnSpacing={4} pb={3}>
          <Grid item xs={12} md={6}>
            <RHFTextField
              label="CHC-2"
              size="small"
              fullWidth
              name="childCode"
              {...methods}
              disabled={props.disabled}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RHFUploadFile
              name="uploadImage"
              {...methods}
              required
              disabled={props.disabled}
            />
          </Grid>
        </Grid> */}
        <Grid container spacing={3}>
          {OriginalChildReferralData?.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                <>
                  <Grid>
                    <form.component
                      disabled={props.disabled}
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

          <Grid item xs={12}>
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
                Submit
              </Button>
            </Link>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
};

export default ViewOriginalChild;
