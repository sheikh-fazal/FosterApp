import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { ContextualFormData, ContextualFormDataValues, ContextualFormValidationSchema } from ".";

const ContextualSafeguardingForm = ({ disabled }: any) => {
  const methods: any = useForm({
    resolver: yupResolver(ContextualFormValidationSchema),
    defaultValues: ContextualFormDataValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {ContextualFormData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              {...item.componentProps}

              disabled={disabled}
              size={"small"}
            >
              {item?.heading}
            </item.component>
          </Grid>
        ))}

        <Grid item xs={12}>
          
            <Button disabled={disabled} type="submit" variant="contained" sx={{ mr: 2 }}>
              Submit
            </Button>
         
          <Link
            href={"/safeguarding/child-protection/contextual-safeguarding"}
            style={{ textDecoration: "none" }}
          >
            <Button type="button" variant="contained">
              Back
            </Button>
          </Link>
        </Grid>

      </Grid>
    </FormProvider>
  )
}

export default ContextualSafeguardingForm