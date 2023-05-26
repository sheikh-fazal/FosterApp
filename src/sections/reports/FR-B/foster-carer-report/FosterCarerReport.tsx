import HorizaontalTabs from '@root/components/HorizaontalTabs'
import React from 'react'
import PartA from './part-a/PartA'
import PartB from './part-b/PartB'

const FosterCarerReport = () => {
  return (
    <HorizaontalTabs tabsDataArray={['part a', 'part b']}>
      <PartA />
      <PartB />
    </HorizaontalTabs>
  )
}

export default FosterCarerReport