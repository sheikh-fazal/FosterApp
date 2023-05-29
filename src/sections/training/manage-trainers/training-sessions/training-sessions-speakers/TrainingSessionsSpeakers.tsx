import React from "react";
import { useTrainingSessionsSpeakers } from "./useTrainingSessionsSpeakers";
import VericalTabs from "@root/components/VericalTabs";
import { ScheduleDataTable } from "../training-sessions-schedule/full-schedule";
import VerticalSmallTabs from "@root/components/VerticalSmallTabs";
import AllSpeakers from "./all-speakers/AllSpeakers";
import ConfirmedSpeakers from "./confirmed-speakers/ConfirmedSpeakers";
import UnconfirmedSpeakers from "./unconfirmed-speakers/UnconfirmedSpeakers";

const TrainingSessionsSpeakers = () => {
  const { speakerDataMap } = useTrainingSessionsSpeakers();
  const tabs = [
    "All speakers",
    "Confirmed speakers",
    "Unconfirmed speakers",
  ];
  return (
    <div>
      {/* <VericalTabs tabsDataArray={speakerDataMap}>
        
      </VericalTabs> */}
      <VerticalSmallTabs tabs={tabs}>
        <AllSpeakers/>
        <ConfirmedSpeakers />
        <UnconfirmedSpeakers />
      </VerticalSmallTabs>
    </div>
  );
};

export default TrainingSessionsSpeakers;
