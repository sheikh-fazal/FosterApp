import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { pageOneFormData } from ".";
import { FormProvider } from "@root/components/hook-form";
import { usePageOneForm } from "./usePageOneForm";

const PageOneForm = () => {
  const { methods, handleSubmit, onSubmit } = usePageOneForm();

  return (
    <Box sx={{ padding: "5px 30px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {pageOneFormData.details.map((detail, i) => (
            <Grid item md={6} xs={12} key={i}>
              <Typography sx={styles.heading}>
                <span>{detail.label}&nbsp;</span>
                <span style={{ fontWeight: "500" }}>{detail.value}</span>
              </Typography>
            </Grid>
          ))}
          {pageOneFormData.formFields.map((field, i) => (
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
                field.tag
              )}
            </Grid>
          ))}
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default PageOneForm;

const styles = {
  heading: {
    color: "#898989",
    fontSize: "16px",
    fontWeight: "600",
  },
};
