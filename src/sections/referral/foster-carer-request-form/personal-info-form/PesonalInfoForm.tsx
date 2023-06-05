import React from "react";
import Link from "next/link";
import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { usePersonalInfoForm } from "./usePersonalInfoForm"


const PesonalInfoForm = ({ disabled }: any) => {
  const {
    PersonalInfoFormData,
    onSubmit,
    handleSubmit,
    methods,
  } = usePersonalInfoForm()

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {PersonalInfoFormData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              {...item.componentProps}
              disabled={disabled}
              size={"small"}
            >
              {item.componentProps.select
                ? item.options.map((option: any) => (
                  <option key={option.value} value={option.value}>
                  
                    {option.label}
                  </option>
                ))
                : null}
              {item?.heading}
            </item.component>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Button
            disabled={disabled}
            type="submit"
            variant="contained"
            sx={{ mr: 2 }}
          >
            Submit
          </Button>

          <Link href={""} style={{ textDecoration: "none" }}>
            <Button
              type="button"
              variant="contained"
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": { backgroundColor: "#F6830F" },
              }}
            >
              Back
            </Button>
          </Link>
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default PesonalInfoForm;
