import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

import { FormProvider } from "@root/components/hook-form";
import { useDiaryRecordingsForm } from "./useDiaryRecordingsForm";
import { DiaryRecordingFormData } from ".";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

const DiaryRecordingsForm = ({ action }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods } = useDiaryRecordingsForm();
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods}>
        <Grid container columnSpacing={4}>
          {DiaryRecordingFormData?.map((form: any, i: any) => (
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

export default DiaryRecordingsForm;
