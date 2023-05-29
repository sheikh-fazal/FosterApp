// form
// @mui
import { Grid, Box } from "@mui/material";
// utils
// components
import { FormProvider } from "@root/components/hook-form";
//
import { formData } from ".";
import FormSubmitButtons from "@root/components/FormSubmitButtons";
import { useContactForm } from "./useContactForm";

export default function ContactForm(props: any) {
  const { disabled, data, apllicationFormid } = props;

  const { methods, handleSubmit, onSubmit, isSubmitting, isDirty, theme } =
    useContactForm(data, apllicationFormid);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        {formData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                disabled={disabled}
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
        <Grid item xs={12}>
          {disabled ? (
            ""
          ) : (
            <FormSubmitButtons isSubmitting={isSubmitting} isDirty={isDirty} />
          )}
        </Grid>
      </Grid>
    </FormProvider>
  );
}