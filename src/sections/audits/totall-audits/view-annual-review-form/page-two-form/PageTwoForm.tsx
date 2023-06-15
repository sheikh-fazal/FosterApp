import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { pageTwoFormData } from ".";
import { FormProvider } from "@root/components/hook-form";
import { usePageTwoForm } from "./usePageTwoForm";

const PageTwoForm = () => {
  const { methods, handleSubmit, onSubmit } = usePageTwoForm();

  return (
    <Box sx={{ padding: "5px 30px" }}>
      <Typography sx={{ ...styles.heading, fontWeight: "500", mb: "35px" }}>
        Primary Carer Last Medical Date
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {pageTwoFormData.formFields.map((field, i) => (
            <Grid item md={field.gridLength} key={i}>
              <Typography sx={styles.heading}>{field.title}</Typography>
              <field.component size={"small"} fullWidth {...field.otherOptions} />
            </Grid>
          ))}
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default PageTwoForm;

const styles = {
  heading: {
    color: "#898989",
    fontSize: "16px",
    fontWeight: "600",
  },
};
