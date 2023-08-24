import {
  Grid,
  useTheme,
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
} from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { childReportData } from "./index";
import { useChildOohReportForm } from "./useChildOohReportForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import IsFetching from "@root/components/loaders/IsFetching";
const ChildOohReportForm = (props: any) => {
  const { action, id } = props;
  const theme: any = useTheme();
  //OOH Report  Custom Hook
  const {
    methods,
    onSubmit,
    handleSubmit,
    isLoading,
    isFetching,
    setValue,
    trigger,
    getValues,
  } = useChildOohReportForm(action, id);
  if (isLoading) return <SkeletonFormdata />;
  return (
    <Grid container>
      <Card sx={{ p: "30px 20px" }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <IsFetching isFetching={isFetching} />
          <Grid container rowSpacing={4} columnSpacing={5} alignItems="center">
            {childReportData.map((form: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={form.id}>
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
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))
                        : null}
                    </form.component>
                  )}
                  {form.component === "RadioGroup" && (
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <Typography
                        sx={{
                          color: theme.palette.grey[500],
                          fontWeight: theme.typography.fontWeightMedium,
                        }}
                        variant="body1"
                        color="initial"
                      >
                        {form.otherOptions.label}
                      </Typography>
                      <RadioGroup
                        name={form.otherOptions.name}
                        defaultValue={getValues(`${form.otherOptions.name}`)}
                        onChange={(e) => {
                          setValue(
                            `${form.otherOptions.name}`,
                            `${e.target.value === "yes" ? true : false}`
                          );
                          trigger(`${form.otherOptions.name}`);
                        }}
                        sx={{ display: "flex", flexDirection: "row" }}
                      >
                        {form?.Options?.map((mode: any, index: any) => {
                          return (
                            <Grid key={mode} item>
                              <FormControlLabel
                                label={mode === true ? "yes" : "No"}
                                control={<Radio />}
                                value={mode}
                                disabled={action === "view" ? true : false}
                              />
                            </Grid>
                          );
                        })}
                      </RadioGroup>
                    </Box>
                  )}
                </Grid>
              );
            })}
          </Grid>
        </FormProvider>
      </Card>
    </Grid>
  );
};

export default ChildOohReportForm;
