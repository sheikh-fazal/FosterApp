import React from "react";
import { useTrainingSessionsBudget } from "./useTrainingSessionsBudget";
import VericalTabs from "@root/components/VericalTabs";
import VerticalSmallTabs from "@root/components/VerticalSmallTabs";
import { ScheduleDataTable } from "../training-sessions-schedule/schedule-data-table";
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
        <ScheduleDataTable />
        <ScheduleDataTable />
      </VerticalSmallTabs>
    </div>
  );
};

export default TrainingSessionsBudget;
