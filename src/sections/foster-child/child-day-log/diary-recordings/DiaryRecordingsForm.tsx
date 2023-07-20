import { Grid, useTheme, Button } from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { diaryRecordingData } from "./index";
import { useDiaryRecordingsForm } from "./useDiaryRecordingsForm";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const DiaryRecordingsForm = (props: any) => {
  const { action, id } = props;
  const theme: any = useTheme();
  //Diary Recordings  Custom Hook
  const { router, methods, onSubmit, handleSubmit, isSubmitting, isLoading } =
    useDiaryRecordingsForm(action, id);
  const { fosterChildId } = router.query;
  if (isLoading) return <SkeletonFormdata />;

  return (
    <Grid container>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={4} columnSpacing={5} alignItems="center">
          {diaryRecordingData.map((form: any) => {
            return (
              <Grid
                item
                xs={12}
                md={form?.gridLength}
                key={form.id}
                sx={{ mt: 1 }}
              >
                {form.component !== "RadioGroup" && (
                  <form.component
                    size="small"
                    {...form.otherOptions}
                    disabled={action === "view" ? true : false}
                    InputLabelProps={{
                      shrink: action === "view" ? true : undefined,
                      disabled: action === "view" ? true : undefined,
                    }}
                  >
                    {form.otherOptions.select
                      ? form.options.map((option: any) => (
                          <option key={option.id} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </form.component>
                )}
              </Grid>
            );
          })}
          <Grid
            xs={12}
            sx={{ display: "flex", gap: "15px", flexWrap: "wrap" }}
            item
          >
            {action === "add" || action === "edit" ? (
              <LoadingButton
                type="submit"
                loading={isSubmitting}
                sx={{
                  bgcolor: theme.palette.primary.main,
                  "&:hover": { bgcolor: theme.palette.primary.main },
                }}
                variant="contained"
              >
                Submit
              </LoadingButton>
            ) : null}
            <Button
              sx={{
                bgcolor: theme.palette.orange.main,
                "&:hover": { bgcolor: theme.palette.orange.main },
              }}
              variant="contained"
              onClick={() =>
                router.push({
                  pathname: "/foster-child/child-day-log/diary-recordings",
                  query: {
                    fosterChildId: fosterChildId,
                  },
                })
              }
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </Grid>
  );
};

export default DiaryRecordingsForm;
