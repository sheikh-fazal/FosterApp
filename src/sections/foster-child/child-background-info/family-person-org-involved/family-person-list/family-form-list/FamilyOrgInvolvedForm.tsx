import React from "react";
import Link from "next/link";
import { Button, Grid } from "@mui/material";
import { FamilyOrgInvolvedFormData } from ".";
import { FormProvider } from "@root/components/hook-form";
import { useFamilyOrgInvolvedForm } from "./useFamilyOrgInvolvedForm";

export default function FamilyOrgInvolvedForm(props: any) {
  const { methods, handleSubmit, disabled, onSubmit } =
    useFamilyOrgInvolvedForm(props);

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {FamilyOrgInvolvedFormData?.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                <>
                  <Grid>
                    <form.component
                      size="small"
                      {...form.otherOptions}
                      disabled={disabled}
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

          {!disabled && (
            <Grid item xs={12}>
              <Button size="large" type="submit" variant="contained">
                Submit
              </Button>
              <Link href={"/foster-child/child-background-info/family-person-org-involved"}>
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
          )}
        </Grid>
      </FormProvider>
    </>
  );
}
