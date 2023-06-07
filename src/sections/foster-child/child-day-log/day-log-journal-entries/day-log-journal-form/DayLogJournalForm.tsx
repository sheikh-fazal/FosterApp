import React from "react";
import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import Link from "next/link";
import { DayLogJournalFormData, DayLogJournalFormValidation } from ".";
import { useRouter } from "next/router";


export default function DayLogJournalForm(props: any) {

  const { query } = useRouter()

  const { defaultValues, disabled } = props;

  const { methods, handleSubmit, onSubmit } = DayLogJournalFormValidation({});

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {DayLogJournalFormData?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component
                {...item.componentProps}
                disabled={query.action === "view"}
                size={"small"}>
                {item?.componentProps?.select
                  ? item?.options?.map((option: any) => (
                    <option key={option?.value} value={option?.value}>
                      {option?.label}
                    </option>
                  ))
                  : null}
                {item?.heading}
              </item.component>
            </Grid>
          ))}
          {

            query.action !== "view" &&
            <Grid item xs={12} >
              <Button size="large" type="submit" variant="contained" disabled={query.action === "view"}>
                Submit
              </Button>
              <Link href={"/foster-child/child-day-log/day-log-journal-entries"} >
                <Button
                  disabled={query.action === "view"}
                  type="button"
                  sx={{
                    color: "#fff",
                    ml: 1,
                    backgroundColor: "#F6830F",
                  }}
                  size="large"
                  variant="contained"
                >
                  Back
                </Button>
              </Link>
            </Grid>
          }
        </Grid>
      </FormProvider>
    </>
  )
}
