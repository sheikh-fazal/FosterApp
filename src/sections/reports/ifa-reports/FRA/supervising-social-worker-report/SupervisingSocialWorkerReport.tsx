import { Box, Card, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const SupervisingSocialWorkerReport = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Typography sx={styles.title}>Foster Course</Typography>
      <Grid container spacing={0.5}>
        <Grid item lg={4} md={6} xs={12} display={'flex'} flexDirection={'column'} gap={'5px'}>
          <CustomBox title={'title *'} />
          <TextField size='small' fullWidth />
        </Grid>
      </Grid>
    </Card>
  )
}

export default SupervisingSocialWorkerReport;



const CustomBox = ({ title }: any) => <Box
  sx={{
    border: '1px solid #898989',
    borderRadius: '8px',
    textAlign: 'center',
    p: '12px',
    fontWeight: 600,
    fontSize: '16px',
    color: '#10131C'
  }}>
  {title}
</Box>

const styles = {
  title: {
    fontWeight: 600,
    fontSize: '16px',
    color: '#0E918C'
  }
}