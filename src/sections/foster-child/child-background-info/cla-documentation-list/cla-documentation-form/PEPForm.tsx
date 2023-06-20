import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Box, Grid, Paper } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "@root/components/hook-form";
import {
  PEPFormData,
  PEPFormValidation,
  StrategiesAndEvidence,
  TargetsAndObjectivesData,
  defaultValuesForPep,
} from "..";
import { usePostClaDocumentationListMutation } from "@root/services/foster-child/child-background-info/cla-documentation-list/CLADocumentationListAPI";
import { enqueueSnackbar } from "notistack";

export default function PEPForm(props: any) {
  const router = useRouter();
  const [postClaDocumentationList] = usePostClaDocumentationListMutation();

  const { disabled } = props;

  const methods: any = useForm({
    resolver: yupResolver(PEPFormValidation),
    defaultValues: defaultValuesForPep,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const res: any = await postClaDocumentationList(data).unwrap();
      console.log(res);
      router.push(`/foster-child/child-background-info/cla-documentation`);
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return (
    <Paper elevation={4} sx={{ padding: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {PEPFormData?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component
                {...item.componentProps}
                disabled={disabled}
                size={"small"}
              >
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
        </Grid>

        {router.query.action !== "view" && (
          <Box sx={{ display: "flex", mb: "1rem" }}>
            <LoadingButton
              sx={{ marginRight: "1rem" }}
              type="submit"
              variant="contained"
              disabled={disabled}
              loading={isSubmitting}
            >
              Submit
            </LoadingButton>
            <LoadingButton
              onClick={() => { router.push("/foster-child/child-background-info/cla-documentation");}}
              type="button"
              sx={{ marginRight: "1rem", backgroundColor: "#F6830F" }}
              variant="contained"
              disabled={disabled}
            >
              back
            </LoadingButton>
          </Box>
        )}
      </FormProvider>
    </Paper>
  );
}

export function TargetsAndObjectives() {
  return (
    <Grid container columnSpacing={4}>
      <Grid item xs={12} md={6}>
        {TargetsAndObjectivesData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component {...item.componentProps} size={"small"}>
              {item?.heading}
              <Box
                sx={{ display: "flex", alignItems: "top", flexWrap: "nowrap" }}
              >
                <h4> {item?.paraTitle}</h4>
                <Box sx={{ mb: 2 }}>{item?.para}</Box>
              </Box>
            </item.component>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        {StrategiesAndEvidence?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component {...item.componentProps} size={"small"}>
              {item?.heading}
              <li>{item?.para}</li>
            </item.component>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}