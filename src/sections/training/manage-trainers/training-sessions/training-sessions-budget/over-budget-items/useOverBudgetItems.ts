import React, { useState } from 'react'
import { TOTAL_BUDGET_DATA } from '@root/dropdown-data/totalBudgetTableData';
export const useOverBudgetItems = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [data, setData] = useState(TOTAL_BUDGET_DATA)
  return {
    data,
    openDelete,
    setOpenDelete
  }
}