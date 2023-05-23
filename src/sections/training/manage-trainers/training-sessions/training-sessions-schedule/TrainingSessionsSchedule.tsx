import VericalTabs from "@root/components/VericalTabs";
import React from "react";
import { useTrainingSessionsSchedule } from "./useTrainingSessionsSchedule";

const TrainingSessionsSchedule = () => {
  const { scheduleDataMap } = useTrainingSessionsSchedule();
  console.log(scheduleDataMap);
  return (
    <div>
      <VericalTabs tabsDataArray={scheduleDataMap}>
        
      </VericalTabs>
    </div>
  );
};

export default TrainingSessionsSchedule;
