import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { formFields } from ".";
import { FormProvider } from "@root/components/hook-form";
import { usePageThreeForm } from "./usePageThreeForm";

const PageThreeForm = () => {
  const { methods, handleSubmit, onSubmit } = usePageThreeForm();

  return (
    <Box sx={{ padding: "5px 30px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {formFields.map((field, i) => (
            <Grid item md={field.gridLength} key={i}>
              <Typography sx={styles.heading}>{field.title}</Typography>
              {field.component ? (
                <field.component size={"small"} fullWidth {...field.otherOptions} />
              ) : (
                <Typography sx={{ ...styles.heading, fontSize: "18px" }}>
                  {field.heading}
                </Typography>
              )}
            </Grid>
          ))}
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default PageThreeForm;

const styles = {
  heading: {
    color: "#898989",
    fontSize: "16px",
    fontWeight: "600",
  },
};
