import { Box, Card, Grid, } from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { useActiveCarersContactsForm } from "./useActiveCarersContactsForm";
import { ActiveCarersContactFormData } from ".";

const ActiveCarersContactForm = ({ action }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods } = useActiveCarersContactsForm();
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods}>
        <Grid container columnSpacing={4}>
          {ActiveCarersContactFormData?.map((form: any, i: any) => (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              {form.component && (
                <form.component
                  disabled={disabled}
                  size="small"
                  {...form.componentProps}
                >
                  {form?.heading}
                  {form.componentProps?.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              )}
              {form?.hr && (
                <Box sx={{ my: 2 }}>
                  <hr></hr>
                </Box>
              )}
              {form?.uploadPhoto && (
                <>
                  <RHFUploadFile
                    name={"updateMeetingRecord"}
                    {...methods}
                    required
                  />
                </>
              )}
            </Grid>
          ))}
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default ActiveCarersContactForm;
