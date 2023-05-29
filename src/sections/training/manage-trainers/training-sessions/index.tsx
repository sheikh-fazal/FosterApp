import HorizaontalTabs from "@root/components/HorizaontalTabs";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { TrainingSessionsHome } from "./training-sessions-home";
import { TrainingSessionsSchedule } from "./training-sessions-schedule";
import { TrainingSessionsSpeakers } from "./training-sessions-speakers";
import { TrainingSessionsAttendees } from "./training-sessions-attendees";
import { TrainingSessionsBudget } from "./training-sessions-budget";
import { useRouter } from "next/router";

const TrainingSessionMainModule = () => {
  const navigate = useRouter();
  return (
    <div>
      <TableHeader
        title=""
        hideSearch
        showAddBtn
        onAdd={() =>
          navigate.push(
            "/training/manage-trainers/training-sessions/add-training-session"
          )
        }
      />
      <HorizaontalTabs
        tabsDataArray={["Home", "Schedule", "Speakers", "Attendees", "Budget"]}
      >
        <TrainingSessionsHome />
        <TrainingSessionsSchedule />
        <TrainingSessionsSpeakers />
        <TrainingSessionsAttendees />
        <TrainingSessionsBudget />
      </HorizaontalTabs>
    </div>
  );
};

export default TrainingSessionMainModule;
