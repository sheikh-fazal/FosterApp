import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import AddSafeguardingMeetingTable from './add-safeguard-meeting-form-table/AddSafeguardingMeetingTable';
import { AddSafeguardingMeetingFormData, defaultValues, AddSafeguardingMeetingFormValidationSchema } from ".";
import { enqueueSnackbar } from "notistack";
import { Button, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useAddSafeguardingMeetingForm } from "./useAddSafeguardingMeetingForm";


export default function AddSafeguardingMeetingForm() {
  const {
    methods,
    handleSubmit,
    onSubmit,
    router
  } = useAddSafeguardingMeetingForm()
  return (
    <Grid sx={{ boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.2)", borderRadius: "10px", padding: "0px 22px 30px" }}>
      <AddSafeguardingMeetingTable />
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {AddSafeguardingMeetingFormData?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <Typography sx={{ marginBottom: "5px", fontSize: "16px !important", fontWeight: "600" }} variant="h6" gutterBottom>{item.title}</Typography>
              <item.component
                {...item.componentProps}
                //   disabled={disabled}
                size={"small"}
              >
                {item?.heading}
              </item.component>

            </Grid>
          ))}
          {/* {!disabled && ( */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" sx={{ mr: 2 }}>
              Submit
            </Button>
            <Link
              href={"/safeguarding/safeguarding-tools/safeguarding-meetings"}
              style={{ textDecoration: "none" }}
            >
              <Button type="button" variant="contained">
                Back
              </Button>
            </Link>
          </Grid>
          {/* )} */}
        </Grid>
      </FormProvider>
    </Grid>
  )
}

