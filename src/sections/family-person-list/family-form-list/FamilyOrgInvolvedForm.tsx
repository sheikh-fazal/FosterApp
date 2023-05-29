import React from "react";
import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import Link from "next/link";
import { FamilyOrgInvolvedFormData, FamilyOrgInvolvedFormValidation } from ".";


export default function FamilyOrgInvolvedForm() {

  const { methods, handleSubmit, onSubmit } = FamilyOrgInvolvedFormValidation({});

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
              Submit
            </Button>
            <Link href={"/family-person-list"}>
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
  )
}
