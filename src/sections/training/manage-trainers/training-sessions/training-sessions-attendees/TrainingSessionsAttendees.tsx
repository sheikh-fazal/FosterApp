import VericalTabs from "@root/components/VericalTabs";
import React from "react";
import { useTrainingSessionsAttendees } from "./useTrainingSessionsAttendees";
import VerticalSmallTabs from "@root/components/VerticalSmallTabs";
import { ScheduleDataTable } from "../training-sessions-schedule/schedule-data-table";

const TrainingSessionsAttendees = () => {
  const { attendeesDataMap } = useTrainingSessionsAttendees();
  const tabs = [
    "All attendees",
    "Registration form",
    'Confirmed attendees',
    'Unconfirmed attendees'
  ];
  return (
    <div>
      {/* <VericalTabs tabsDataArray={attendeesDataMap}>
        
      </VericalTabs> */}
            <VerticalSmallTabs tabs={tabs}>
        <ScheduleDataTable />
        <ScheduleDataTable />
        <ScheduleDataTable />
        <ScheduleDataTable />
      </VerticalSmallTabs>
    </div>
  );
};

export default TrainingSessionsAttendees;
