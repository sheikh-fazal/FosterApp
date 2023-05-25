import { Grid, Paper } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider } from "@root/components/hook-form";
import { ClaDocumentationListFormValidation, ClaDocumentationListFormData } from './';

export default function ClaDocumentationListForm() {

  const methods: any = useForm({
    resolver: yupResolver(ClaDocumentationListFormValidation),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {

  };

  return (
    <Paper elevation={4} sx={{ padding: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {ClaDocumentationListFormData?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component
                {...item.componentProps}
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
        </Grid>
      </FormProvider>
    </Paper>
  )
}