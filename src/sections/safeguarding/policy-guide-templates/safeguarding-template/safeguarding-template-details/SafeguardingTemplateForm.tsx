import { useState, useRef } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
import { useRouter } from "next/router";
// @mui
import {
  Grid,
  Box,
  Button,
  useTheme,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
import { fTimestamp } from "@root/utils/formatTime";
// components
import { FormProvider } from "@root/components/hook-form";
//
import { FormSchema, defaultValues, formData } from ".";

const SafeguardingTemplateForm = (props: any) => {
  const { formType } = props;
  let theme = useTheme();
  let router = useRouter();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("data", data);
    // alert(
    //   JSON.stringify(
    //     {
    //       ...data,
    //     },
    //     null,
    //     2
    //   )
    // );
    reset();
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4} paddingY={2}>
        {formData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                disabled={props.disabled}
                size="small"
                {...form.otherOptions}
              >
                {form.otherOptions.select
                  ? form.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {" "}
                      {option.label}{" "}
                    </option>
                  ))
                  : null}
              </form.component>
            </Grid>
          );
        })}
        {!props?.disabled &&
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              {formType == "view" ? (
                ""
              ) : (
                <LoadingButton
                  sx={{ marginRight: "1rem" }}
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                  disabled={!isDirty}
                >
                  Submit
                </LoadingButton>
              )}

              <Button
                sx={{
                  backgroundColor: "#F6830F",
                  "&:hover": {
                    backgroundColor: "#F6830F",
                  },
                }}
                onClick={() => {
                  router.push("/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details");
                }}
                type="button"
                variant="contained"
              >
                Back
              </Button>
            </Box>
          </Grid>
        }
      </Grid>
    </FormProvider>
  );
}
export default SafeguardingTemplateForm