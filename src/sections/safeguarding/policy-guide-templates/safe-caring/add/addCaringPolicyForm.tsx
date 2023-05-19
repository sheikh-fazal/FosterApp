import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { AForm } from ".";
import { useCaringPolicyForm } from "./useCaringPolicyForm";
import Link from "next/link";

export default function AddCaringPolicyForm({ disabled }: any) {
  const {
    methods,
    handleSubmit,
    onSubmit,
    query,
  } = useCaringPolicyForm();
  
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {AForm?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              {...item.componentProps}
              disabled={query.action === "view" && disabled}
              value={
                query.action === "edit" || query.action === "view"
                  ? item.componentProps.value
                  : ""
              }
              size={"small"}
            >
              {item?.heading}
            </item.component>
          </Grid>
        ))}
        <Grid item xs={12}>
          {query.action !== "view" && (
            <Button type="submit" variant="contained" sx={{ mr: 2 }}>
              Submit
            </Button>
          )}
          <Link
            href={"/safeguarding/policy-guide-templates/safe-caring"}
            style={{ textDecoration: "none" }}
          >
            <Button type="button" variant="contained">
              Back
            </Button>
          </Link>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
