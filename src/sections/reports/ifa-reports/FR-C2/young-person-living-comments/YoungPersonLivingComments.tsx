import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { FormProvider } from '@root/components/hook-form'
import React from 'react'
import { LoadingButton } from '@mui/lab';
import { useYoungPersonLivingComments } from './useYoungPersonLivingComments';
import { FRC2FormData } from '.';

const YoungPersonLivingComments = ({ action, id }: any) => {
  const disabled = action === 'view' ? true : false;
  const { methods, onSubmit, handleSubmit, handleBack } = useYoungPersonLivingComments();
  return (
    <Card sx={{ p: 2 }}>
      <Box textAlign={'center'} margin={'0 auto'}>
        <Typography sx={{ fontWeight: 700, mb: '20px', fontSize: '17px', color: '#898989' }}>
          FR-C2:  YOUNG PERSON LIVING IN THE HOUSEHOLD’S COMMENTS
        </Typography>
        <Typography sx={{ fontWeight: 500, mb: '30px', fontSize: '16px', color: '#898989' }}>
          Wherever possible, the young person should complete this form in their own words, and
          each young person should complete a separate form. Younger children should complete
          Form FR-C1 and adult children should complete Form FR-F2.
          Please note that this form will be shared with the foster carer(s). If you have relevant
          information that you think should not be shared with the foster carer(s) then please discuss
          this with your supervising social worker.
        </Typography>
      </Box>
      <FormProvider
        methods={methods} onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={4}>
          {FRC2FormData.map((form, i) => (
            <Grid item key={i} md={form.gridLength} xs={12}>
              <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>{form.title}</Typography>
              {form.otherOptions && <form.component disabled={disabled} size='small' {...form.otherOptions}>
                {form.otherOptions.select
                  ? form.otherOptions.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))
                  : null}
              </form.component>}
            </Grid>
          ))}

          <Grid item xs={12}>
            <Box
              sx={{ display: "flex", gap: '1rem' }}>
             {action !== 'view' && <LoadingButton
                type="submit"
                variant="contained"
              >
                Submit
              </LoadingButton>}
              <Button
                sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F", }, }}
                type="button"
                variant="contained"
                onClick={handleBack}
              >Back</Button>
            </Box>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  )
}

export default YoungPersonLivingComments;