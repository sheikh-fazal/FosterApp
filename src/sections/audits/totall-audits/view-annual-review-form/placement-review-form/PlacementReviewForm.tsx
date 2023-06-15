import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { formFields } from ".";
import { FormProvider } from "@root/components/hook-form";
import { usePlacementReviewForm } from "./usePlacementReviewForm";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

const PlacementReviewForm = () => {
  const { methods, handleSubmit, onSubmit } = usePlacementReviewForm();

  return (
    <Box sx={{ padding: "5px 30px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {formFields.map((field, i) => (
            <Grid item md={field.gridLength} key={i}>
              <Typography sx={styles.heading}>{field.title}</Typography>
              {field.component ? (
                <field.component size={"small"} fullWidth {...field.otherOptions}>
                  {field.otherOptions?.select
                    ? field.otherOptions?.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </field.component>
              ) : (
                <Typography sx={styles.heading}>{field.heading}</Typography>
              )}
              {field.requireFileUpload && (
                <RHFUploadFile name={field.otherOptions.name} {...methods} />
              )}
            </Grid>
          ))}
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default PlacementReviewForm;

const styles = {
  heading: {
    color: "#898989",
    fontSize: "16px",
    fontWeight: "600",
  },
};
