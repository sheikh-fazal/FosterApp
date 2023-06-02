import React from "react";
import Link from "next/link";
import { Button, Grid, Typography } from "@mui/material";
import { FormProvider, RHFSelect, RHFTextField } from "@root/components/hook-form";
import { usePolicyVerticalAddNew } from "./usePolicyVerticalAddNew";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { useRouter } from "next/router";

const PolicyVerticalAddNew = (props: any) => {
  const { disabled, onSubmit, handleAddNewBack } = props;
  const { methods, handleSubmit, PolicyVerticalAddNewFormData, currentPage } = usePolicyVerticalAddNew();
  
  const selectedArray = [
    { value: "Home Safety Checklist", label: "Home Safety Checklist" },
    { value: "Foster Carer Checklist", label: "Foster Carer Checklist" },
    { value: "General Data Protection Checklist", label: "General Data Protection Checklist" },
  ]

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        <Grid item xs={6} md={6}>
          <Typography sx={styles.title}>Title</Typography>
          {currentPage.pathname === '/policies-and-guidelines/checklists/add' ?
            <RHFSelect name="selectTitle" disabled={disabled} required={true} size="small">
              {selectedArray.map((item: any, index: number) => (
                <option value={item.label} key={index}>{item.value}</option>
              ))}
            </RHFSelect> : <RHFTextField name="title" disabled={disabled} size="small" />
          }
        </Grid>
        {PolicyVerticalAddNewFormData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <Typography sx={styles.title} variant="h6" gutterBottom>{item.title}</Typography>
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
        <Grid item xs={12} md={6} sx={{ "@media screen and (max-width: 899px)": { mb: "20px" } }}>
          <Typography sx={styles.title}>Choose Files</Typography>
          <RHFUploadFile name="updatePhoto" disabled={disabled} {...methods} required />
        </Grid>

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

          <Link href={handleAddNewBack} style={{ textDecoration: "none" }}>
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

export default PolicyVerticalAddNew;

const styles = {
  title: { marginBottom: "5px", fontSize: "16px !important", fontWeight: "600" }
}
