import React from "react";
import Link from "next/link";
import { Box, Button, Grid, Typography } from "@mui/material";
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { useRouter } from "next/router";
import { usePolicyVerticalAddNew } from "./usePolicyVerticalAddForm";

const PolicyVerticalAddNew = (props: any) => {
  const { disabled, onSubmit, handleAddNewBack } = props;
  const { methods, handleSubmit, PolicyVerticalAddNewFormData, currentPage, route, selectedArray } = usePolicyVerticalAddNew();

  

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        <Grid item xs={6} md={6}>
          {currentPage.pathname === '/policies-and-guidelines/checklists/add' ?
            <RHFSelect name="selectTitle" disabled={route.query.action === 'view'} size="small" label="Select">
              {selectedArray.map((item: any, index: number) => (
                <option value={item.label} key={index}>{item.value}</option>
              ))}
            </RHFSelect> : <RHFTextField name="title" disabled={route.query.action === 'view'} size="small" label="Title" />
          }
        </Grid>
        {PolicyVerticalAddNewFormData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              {...item.componentProps}
              disabled={route.query.action === 'view'}
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
        {route.query.action !== 'view' &&
          <Grid item xs={12} md={6} sx={{ "@media screen and (max-width: 899px)": { mb: "20px" } }}>
            <RHFUploadFile name="updatePhoto" disabled={disabled} label="Choose Files" {...methods} required />
          </Grid>
        }

        <Grid item xs={12}>
          {route.query.action !== "view" && (
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
  title: {
    marginBottom: "5px",
    fontSize: "16px !important",
    fontWeight: "600",
  },
};
