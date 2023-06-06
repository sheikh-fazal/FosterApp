import React from "react";
export const useRecruitment = () => {
  const [activeStep, setActiveStep] = React.useState<any>(null);

  const handleStep = (step: number) => () => {
    setActiveStep(step === activeStep ? null : step);
  };
  return { handleStep, activeStep };
};
