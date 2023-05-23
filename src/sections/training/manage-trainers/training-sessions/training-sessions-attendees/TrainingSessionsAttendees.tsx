import VericalTabs from "@root/components/VericalTabs";
import React from "react";
import { useTrainingSessionsAttendees } from "./useTrainingSessionsAttendees";

const TrainingSessionsAttendees = () => {
  const { attendeesDataMap } = useTrainingSessionsAttendees();
  return (
    <div>
      <VericalTabs tabsDataArray={attendeesDataMap}>
        
      </VericalTabs>
    </div>
  );
};

export default TrainingSessionsAttendees;
