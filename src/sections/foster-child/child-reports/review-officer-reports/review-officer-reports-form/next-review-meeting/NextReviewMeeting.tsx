import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { nextReviewMeetingFormData } from ".";

export const NextReviewMeeting = () => {
  return (
    <>
      <Grid container spacing={3}>
        {nextReviewMeetingFormData?.map((form: any) => {
          return (
            <>
              <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                <>
                  <Grid>
                    <form.component
                      size="small"
                      {...form.componentProps}
                      //   disabled={disabled}
                    >
                      {form.componentProps
                        ? form.options?.map((option: any) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))
                        : null}
                      {form?.heading}
                    </form.component>
                  </Grid>
                </>
              </Grid>

            </>
          );
        })}
      </Grid>
    </>
  );
};
