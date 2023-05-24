import { FC } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Grid, Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// components
import { FormProvider } from "@root/components/hook-form";
import FormField from "./FormField";

const FormGenerator: FC<any> = ({
  FormSchema,
  defaultValues,
  fieldsInfo,
  submitClickHand,
  disabled,
}) => {
  const theme: any = useTheme();
  console.log(defaultValues);
  const methods: any = useForm({
    // mode: "onTouched",
    ...(!!FormSchema && { resolver: yupResolver(FormSchema) }),
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
    submitClickHand(data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} mb={5}>
        {fieldsInfo.map((data: any, index: number) => {
          const {
            type,
            name,
            label,
            title,
            options,
            gridSize = { xs: 12, md: 6 },
            heading,
            getOptionLabel,
            ...other
          } = data;
          const titleIndex = title?.indexOf("(");
          if (heading)
            return (
              <Grid item xs={12} key={index}>
                <Typography
                  sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                >
                  {heading}
                </Typography>
              </Grid>
            );
          return (
            <Grid key={index} item {...gridSize}>
              {title && (
                <Typography
                  sx={{ color: theme.palette.grey[500], mb: 0.3 }}
                  variant="body2"
                >
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    {titleIndex !== -1
                      ? title?.substring(0, titleIndex)
                      : title}
                  </Box>
                  {titleIndex !== -1 ? title?.substring(titleIndex) : ""}
                </Typography>
              )}
              <FormField
                fieldType={type}
                name={name}
                label={label}
                fullWidth={true}
                disabled={isSubmitting || disabled}
                options={options}
                size="small"
                getOptionLabel={getOptionLabel}
                {...other}
                {...methods}
              />
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <Button size="large" type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
        {/* <Grid xs={12}>
          <Box
            my={4}
            mr={2}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            {!disabled && (
              <LoadingButton
                color="info"
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                disabled={!isDirty}
              >
                Submit
              </LoadingButton>
            )}
          </Box>
        </Grid> */}
      </Grid>
    </FormProvider>
  );
};

export default FormGenerator;
