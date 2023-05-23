import React from "react";
import { useTrainingSessionsSpeakers } from "./useTrainingSessionsSpeakers";
import VericalTabs from "@root/components/VericalTabs";

const TrainingSessionsSpeakers = () => {
  const { speakerDataMap } = useTrainingSessionsSpeakers();
  return (
    <div>
      <VericalTabs tabsDataArray={speakerDataMap}>
        
      </VericalTabs>
    </div>
  );
};

export default TrainingSessionsSpeakers;
