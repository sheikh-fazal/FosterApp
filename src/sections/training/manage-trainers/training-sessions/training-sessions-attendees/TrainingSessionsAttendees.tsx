import VericalTabs from "@root/components/VericalTabs";
import React from "react";
import { useTrainingSessionsAttendees } from "./useTrainingSessionsAttendees";
import VerticalSmallTabs from "@root/components/VerticalSmallTabs";
import { ScheduleDataTable } from "../training-sessions-schedule/full-schedule";
import AllAttendees from "./all-attendees/AllAttendees";
import RegistrationForm from "./registration-form/RegistrationForm";
import ConfirmedAttendees from "./confirmed-attendees/ConfirmedAttendees";
import UnconfirmedAttendees from "./unconfirmed-attendees/UnconfirmedAttendees";

const TrainingSessionsAttendees = () => {
  const { attendeesDataMap } = useTrainingSessionsAttendees();
  const tabs = [
    "All attendees",
    "Registration form",
    "Confirmed attendees",
    "Unconfirmed attendees",
  ];
  return (
    <div>
      {/* <VericalTabs tabsDataArray={attendeesDataMap}>
        
      </VericalTabs> */}
      <VerticalSmallTabs tabs={tabs}>
        <AllAttendees />
        <RegistrationForm />
        <ConfirmedAttendees />
        <UnconfirmedAttendees />
      </VerticalSmallTabs>
    </div>
  );
};

export default TrainingSessionsAttendees;
