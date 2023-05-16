import { useState, useRef } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
// @mui
import {
  Grid,
  Box,
  Button,
  useTheme,
  InputLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import { FormProvider } from "@root/components/hook-form";
//
import { FormSchema, defaultValues, formData } from "./AllegationManagementData";

const AddAllegationForm = (props: any) => {
  let theme = useTheme();
  const router = useRouter();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting, },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log("data",data)
    reset();
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
      <Grid container spacing={4} pt="30px" px="15px">
        {formData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <InputLabel sx={{ fontSize: "16px", fontWeight: 700, mt: '-20px', mb: '20px', color: theme.palette.primary.main }}>{form.head}</InputLabel>
              <InputLabel sx={{ fontWeight: 600, mb: 0.3, color: theme.palette.mode === 'light' ? '#343A40' : theme.palette.mode }}>{form.title}</InputLabel>
              <form.component
                disabled={props.disabled}
                size="small"
                {...form.otherOptions}
              >
                {form.otherOptions.select
                  ? form.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))
                  : null}
              </form.component>
            </Grid>
          );
        })}

        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
            }}
          >
              <LoadingButton
                sx={{ marginRight: "1rem" }}
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Submit
              </LoadingButton>

            <Button
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": {
                  backgroundColor: "#F6830F",
                },
              }}
              onClick={() => {
                router.push("/safeguarding/child-protection/allegation-management");
              }}
              type="button"
              variant="contained"
            >
              Back
            </Button>
          </Box>
        </Grid>

      </Grid>
    </FormProvider>
  );
}
export default AddAllegationForm;