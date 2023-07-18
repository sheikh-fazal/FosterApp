import { Button, Grid } from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import Link from "next/link";
import { ViewOutSchoolActivityInfoData } from ".";
import useViewChildExclusionInfo from "./useViewOutSchoolActivityInfo";

const ViewOutSchoolActivityInfo = (props: any) => {
  const { disabled, formState } = props;

  const { methods, handleSubmit, onSubmit } = useViewChildExclusionInfo();

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {ViewOutSchoolActivityInfoData.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                <>
                  <Grid>
                    <form.component
                      disabled={true}
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
            <Button size="large" type="submit" variant="contained">
              {formState === "add" ? "Submit" : "Update"}
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

export default ViewOutSchoolActivityInfo;
