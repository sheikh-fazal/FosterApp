import React from "react";
import Link from "next/link";
import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useThirdPartyLicenceTableForm } from "./useThirdPartyLicenceTableForm";

const ThirdPartyLicenceTableForm = ({ disabled }: any) => {
  const { methods, FormData, handleSubmit, onSubmit } =
    useThirdPartyLicenceTableForm();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {FormData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              fullWidth
              {...item.componentProps}
              disabled={disabled}
              size={"small"}
            >
              {item?.heading}
            </item.component>
          </Grid>
        ))}

        <Grid item xs={12}>
          {!disabled && (
            <Button
              disabled={disabled}
              type="submit"
              variant="contained"
              sx={{ mr: 2 }}
            >
              Submit
            </Button>
          )}

          <Link
            href={"/system-admin/manage-third-party-license"}
            style={{ textDecoration: "none" }}
          >
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

export default ThirdPartyLicenceTableForm;
