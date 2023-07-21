import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { CarerSectionAFromDate } from ".";
import { useCarerSectionA } from "./useCarerSectionA";

const SuperVisoryCarerSectionA = ({ action }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods } = useCarerSectionA();
  return (
    <FormProvider methods={methods}>
      <Grid container columnSpacing={4}>
        {CarerSectionAFromDate?.map((form: any, i: any) => (
          <Grid item xs={12} md={form?.gridLength} key={i}>
            <Typography sx={(theme) => styles.title(theme, disabled)}>
              {form.title}
            </Typography>
            {form.component && (
              <form.component
                disabled={disabled}
                size="small"
                fullWidth
                {...form.componentProps}
              >
                {form?.heading}
                {form.componentProps.select
                  ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </form.component>
            )}
          </Grid>
        ))}

        <Grid item xs={12}>
          <Link
            href={"/reports/ifa-reports/supervisory-home-visit"}
            style={{ textDecoration: "none" }}
          >
            <Button
              type="button"
              variant="contained"
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": {
                  backgroundColor: "#F6830F",
                },
              }}
            >
              back
            </Button>
          </Link>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default SuperVisoryCarerSectionA;

const styles = {
  title: (theme: any, disabled: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: disabled ? "#898989" : "black",
  }),
};
