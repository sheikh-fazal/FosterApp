import React from 'react'
import CourseListCard from './CourseListCard'
import { SELECT_FILTERS, courseList } from '.'
import { Box, Grid } from '@mui/material'
import TableHeader from '@root/components/TableHeader'
import { useCourseListCard } from './useCourseListCard'
const CourseListMain = () => {

  const { handleCardClick } = useCourseListCard();

  return (
    <Box sx={styles.box}>
      <TableHeader
        title={''}
        showSelectFilters
        selectFilters={SELECT_FILTERS}
      />
      <Grid
        container
        spacing={2}
      >
        {courseList.map((item, i) => (
          <Grid xs={12} lg={6} xl={3} item key={i}>
            <CourseListCard
              desc={
                item.desc.length > 90
                  ? `${item.desc.substring(0, 90)}...`
                  : item.desc
              }
              isStatus={item.isStatus}
              coverImage={item.coverImage}
              isMandatory={item.isMandatory}
              handleClick={handleCardClick}
              maxWidth={'100%'}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default CourseListMain;

const styles = {
  box: {
    '& .MuiStack-root': {
      backgroundColor: 'transparent !important',
      p: '0px !important',
      mb: '10px',
      '& p.MuiTypography-root.MuiTypography-body1': {
        display: 'none'
      }
    }
  }
}