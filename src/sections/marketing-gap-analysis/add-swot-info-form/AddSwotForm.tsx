import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { formFields } from ".";
import { FormProvider } from "@root/components/hook-form";
import { useAddSwotForm } from "./useAddSwotForm";
import { LoadingButton } from "@mui/lab";

const AddSwotForm = () => {
  const { methods, handleSubmit, router, onSubmit } = useAddSwotForm();

  return (
    <Box sx={styles.cardStyle}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {formFields.map((field, i) => (
            <Grid item md={field.gridLength} xs={12} key={i}>
              <Typography sx={styles.heading}>{field.title}</Typography>
              <field.component size={"small"} fullWidth {...field.otherOptions} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} mt={3}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F" } }}
            >
              Submit
            </LoadingButton>
            <Button
              type="button"
              variant="contained"
              onClick={() => router.push("/market-gap-analysis")}
            >
              Back
            </Button>
          </Box>
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default AddSwotForm;

const styles = {
  cardStyle: {
    p: "20px 22px",
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
  },
  heading: {
    color: "#898989",
    fontSize: "16px",
    fontWeight: "600",
  },
};
