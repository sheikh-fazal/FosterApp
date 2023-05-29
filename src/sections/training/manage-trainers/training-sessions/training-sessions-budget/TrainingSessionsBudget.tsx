import React from "react";
import { useTrainingSessionsBudget } from "./useTrainingSessionsBudget";
import VericalTabs from "@root/components/VericalTabs";
import VerticalSmallTabs from "@root/components/VerticalSmallTabs";
import { ScheduleDataTable } from "../training-sessions-schedule/full-schedule";
import TotalBudget from "./total-budget/TotalBudget";
import OverBudgetItems from "./over-budget-items/OverBudgetItems";
const TrainingSessionsBudget = () => {
  const { budgetDataMap } = useTrainingSessionsBudget();
  const tabs = [
    "Total budget",
    "Over budget items",
  ];
  return (
    <div>
      {/* <VericalTabs tabsDataArray={budgetDataMap}>
        
        </VericalTabs> */}
      <VerticalSmallTabs tabs={tabs}>
        <TotalBudget />
        <OverBudgetItems />
      </VerticalSmallTabs>
    </div>
  );
};

export default TrainingSessionsBudget;
