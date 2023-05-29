import { Card, Typography } from '@mui/material'
import React from 'react'

const SupervisingSocialWorkerReport = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Typography sx={styles.title}>Foster Course</Typography>
    </Card>
  )
}

export default SupervisingSocialWorkerReport;

const styles = {
  title: {
    fontWeight: 600,
    fontSize: '16px',
    color: '#0E918C'
  }
}