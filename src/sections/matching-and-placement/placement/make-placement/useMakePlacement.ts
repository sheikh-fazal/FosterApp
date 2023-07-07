import React from "react";

export const useMakePlacement = () => {
  const [activeStep, setActiveStep] = React.useState<any>(-1);

  const handleStep = (step: number) => () => {
    setActiveStep(step === activeStep ? -1 : step);
  };
  return { handleStep, activeStep };
};
