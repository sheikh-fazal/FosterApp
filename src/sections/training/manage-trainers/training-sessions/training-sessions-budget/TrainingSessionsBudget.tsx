import React from 'react'
import { useTrainingSessionsBudget } from './useTrainingSessionsBudget'
import VericalTabs from '@root/components/VericalTabs'
const TrainingSessionsBudget = () => {
  const { budgetDataMap } = useTrainingSessionsBudget()
  return (
    <div>
      <VericalTabs tabsDataArray={budgetDataMap}>
        
        </VericalTabs>
    </div>
  )
}

export default TrainingSessionsBudget
