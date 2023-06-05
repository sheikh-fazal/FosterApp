import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { Button, Grid, Typography } from "@mui/material";
import { CarerSectionBFromDate } from ".";
import { useCarerSectionB } from "./useCarerSectionB";
import Link from "next/link";

const SuperVisoryCarerSectionB = ({ disabled, handleBack }: any) => {
  const { methods } = useCarerSectionB();
  return (
    <FormProvider methods={methods}>
      <Grid container columnSpacing={4}>
        {CarerSectionBFromDate?.map((form: any, i: any) => (
          <Grid item xs={12} md={form?.gridLength} key={i}>
            <Typography sx={(theme) => styles.title(theme, disabled)}>
              {form.title}
            </Typography>
            {form.component && (
              <form.component
                disabled={disabled}
                size="small"
                {...form.componentProps}
              >
                {form?.heading}
              </form.component>
            )}
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            type="button"
            variant="contained"
            sx={{
              backgroundColor: "#F6830F",
              "&:hover": {
                backgroundColor: "#F6830F",
              },
            }}
            onClick={handleBack}
          >
            back
          </Button>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default SuperVisoryCarerSectionB;

const styles = {
  title: (theme: any, disabled: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: disabled ? "#898989" : "black",
  }),
};
