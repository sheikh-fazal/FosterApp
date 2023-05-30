import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { FormProvider } from '@root/components/hook-form'
import React from 'react'
import { LoadingButton } from '@mui/lab';
import { useHouseholdComments } from './useHouseholComment';
import { FRC1FormData } from '.';

const HouseHoldComments = ({ action, id }: any) => {
  const disabled = action === 'view' ? true : false;
  const { methods, onSubmit, handleSubmit, handleBack } = useHouseholdComments();
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant='subtitle1' sx={{ fontWeight: 700, mb: '30px' }}>View Report</Typography>
      <Box textAlign={'center'} maxWidth={'lg'} margin={'0 auto'}>
        <Typography sx={{ fontWeight: 700, mb: '20px', fontSize: '17px', color: '#898989' }}>
          FR-C1: Child Living in the Household’s Comments
        </Typography>
        <Typography sx={{ fontWeight: 500, mb: '30px', fontSize: '16px', color: '#898989' }}>
          If support is needed, it is the responsibility of the supervising social worker to assist children of foster carers to complete this report.
          Wherever possible, it should be completed by the child in their own words.
          Each child should complete a separate form. Young people should complete Form
          FR-C2 and adult children should complete Form FR-F2.
        </Typography>
      </Box>
      <FormProvider
        methods={methods} onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={4}>
          {FRC1FormData.map((form, i) => (
            <Grid item key={i} md={form.gridLength} xs={12}>
              <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>{form.title}</Typography>
              {form.note && <Box display={'flex'}>
                <Typography component={'span'}
                  sx={{ color: '#C82333', fontWeight: 600, fontSize: '14px', mr: '10px' }}>
                  Note:
                </Typography>
                <Typography component={'span'}
                  sx={{ color: '#898989', fontWeight: 500, fontSize: '10px' }}
                >{form.note}</Typography>
              </Box>}
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
              <LoadingButton
                type="submit"
                variant="contained"
              >
                Submit
              </LoadingButton>
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

export default HouseHoldComments;