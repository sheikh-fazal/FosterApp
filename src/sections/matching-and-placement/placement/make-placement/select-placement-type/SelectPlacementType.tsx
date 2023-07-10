import React from "react";
import Link from "next/link";
import { Button, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { SelectPlacementData } from ".";
import useSelectPlacementType from "./useSelectPlacementType";
import { LoadingButton } from "@mui/lab";

const SelectPlacementType = ({ disabled }: any) => {
  const { onSubmit, methods, handleSubmit, theme } = useSelectPlacementType();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        {SelectPlacementData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id} mt={3} >
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
          <LoadingButton
            type="submit"
            sx={{
              bgcolor: theme.palette.primary.main,
              "&:hover": {},
            }}
            variant="contained"
            // loading={isfatching}
          >
            Save and Continue
          </LoadingButton>
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default SelectPlacementType;
