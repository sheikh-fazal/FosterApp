import { Grid } from "@mui/material";

import { FormProvider } from "@root/components/hook-form";
import { useGPDetailsInfo } from "./useGPDetailsInfo";

const GPDetailsInfo = () => {
  const { gpDetailsInfoFormData, methods, handleSubmit, onSubmitHandler } =
    useGPDetailsInfo();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container spacing={5}>
        {gpDetailsInfoFormData.map((form: any, index: number) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id + index}>
              <form.component
                {...form.componentProps}
                size="small"
              >
                {form.componentProps.select
                  ? form.componentProps.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </form.component>
            </Grid>
          );
        })}
      </Grid>
    </FormProvider>
  );
};

export default GPDetailsInfo;
