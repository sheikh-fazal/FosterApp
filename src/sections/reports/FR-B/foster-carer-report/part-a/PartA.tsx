import { Box, Button, Grid, Tooltip, Typography, useTheme } from '@mui/material';
import { FormProvider } from '@root/components/hook-form'
import React from 'react'
import { formData } from '.';
import { LoadingButton } from '@mui/lab';
import { usePartA } from './usePartA';
import InfoIcon from '@mui/icons-material/Info';


const PartA = () => {
  const { methods, onSubmit, handleSubmit } = usePartA();
  const theme = useTheme();
  return (
    <FormProvider
      methods={methods} onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={4}>
        {formData.map((form: any, i: number) => (
          <Grid item xs={12} md={form.gridLength} key={i}>
            {form.tooltip ? <TitleWithTooltip title={form.title} msg={form.tooltipMsg} theme={theme} /> :
              <Typography
                sx={{
                  fontWeight: 600, fontSize: '16px',
                  color: theme.palette.mode === 'light' ? '#343A40' : theme.palette.mode
                }}
              >{form.title}
              </Typography>
            }
            <form.component
              size='small'
              {...form.otherOptions}
            >
              {form.otherOptions.select
                ? form.otherOptions.options.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))
                : null}
            </form.component>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Box
            sx={{ display: "flex", gap: '1rem' }}>
            <LoadingButton
              type="submit"
              variant="contained"
            >
              Next
            </LoadingButton>
            <Button
              sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F", }, }}
              type="button"
              variant="contained"
            // onClick={() => router.push('/safeguarding/child-protection/child-abuse-and-expolitation-management')}
            >Back</Button>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  )
}

export default PartA;

const TitleWithTooltip = ({ title, msg, theme }: any) => {
  return (
    <Box display={'flex'} alignItems={'center'} gap={2}>
      <Typography
        sx={{
          fontWeight: 600, fontSize: '16px',
          color: theme.palette.mode === 'light' ? '#343A40' : theme.palette.mode
        }}
      >{title}
      </Typography>
      <Tooltip
        title={msg}
        placement='right'
        arrow
        sx={{
          '&.MuiTooltip-tooltip':{
            backgroundColor: theme.palette.mode === 'light'? '#343A40' : theme.palette.mode
          }
        }}
      >
        <InfoIcon sx={{ color: theme.palette.grey[500] }} />
      </Tooltip>
    </Box>
  )
}