import React from "react";
import { Button, Card, Grid, Typography } from "@mui/material";
import Page from "@root/components/Page";
import { FormProvider } from "@root/components/hook-form";

import { useChildPersonalGoalListView } from "./useChildPersonalGoalListView";
export const ChildPersonalGoalsListView = (props: any) => {
  // const { disabled, formData, isLoading, isError, isSuccess, breadCrumbData } =
  //   props;

  const { defaultValues, router, theme, methods,childPersonalGoalViewData }: any =
    useChildPersonalGoalListView();
  return (
    <Page title="Child Personal Goals">
      <Card sx={{ p: 2 }}>
        <FormProvider
          methods={methods}
          disableForm={true}
          //  onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={3}>
            {childPersonalGoalViewData?.map((form: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                  <>
                    {" "}
                    {form.component ? (
                      <form.component
                        {...form.componentProps}
                        disabled={true}
                        size="small"
                      >
                        {form?.componentProps.select
                          ? form?.componentProps.options.map((option: any) => (
                              <option key={option.value} value={option.value}>
                                {" "}
                                {option.label}{" "}
                              </option>
                            ))
                          : null}
                      </form.component>
                    ) : (
                      <Typography
                        variant={form.variant}
                        color={theme.palette.primary.main}
                      >
                        {" "}
                        {form.heading}{" "}
                      </Typography>
                    )}{" "}
                  </>
                </Grid>
              );
            })}

            <Grid item xs={12}>
              <Button
                sx={{
                  bgcolor: theme?.palette?.orange?.main,
                  "&:hover": { bgcolor: theme?.palette?.orange?.main },
                  ml: 1,
                }}
                variant="contained"
                onClick={() => router.back()}
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </FormProvider>
      </Card>
    </Page>
  );
};
