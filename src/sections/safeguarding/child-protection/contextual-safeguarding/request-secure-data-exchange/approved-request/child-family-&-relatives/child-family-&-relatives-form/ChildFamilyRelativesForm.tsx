import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { Box, Button, Grid } from "@mui/material";
import Link from "next/link";
import { useChildFamilyRelativesForm } from "./useChildFamilyRelativesForm";

const ChildFamilyRelativesForm = () => {
  const {
    methods,
    onSubmit,
    handleSubmit,
    reset,
    setValue,
    ChildFamilyRelativesData,
  } = useChildFamilyRelativesForm();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ padding: "0.8rem" }}>
        <Grid container columnSpacing={4}>
          {ChildFamilyRelativesData?.map((form: any, i: any) => (
            <Grid item xs={12} md={form?.md} key={i}>
              {form.component && (
                <form.component size="small" {...form.componentProps}>
                  {form?.heading}
                  {form.componentProps.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              )}
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button
              sx={{
                backgroundColor: "#23183D",
                "&:hover": {
                  backgroundColor: "#23183D",
                },
                mr: 2,
              }}
              type="submit"
              variant="contained"
            >
              Save
            </Button>

            <Link href={""} style={{ textDecoration: "none" }}>
              <Button type="button" variant="contained">
                Next
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default ChildFamilyRelativesForm;
