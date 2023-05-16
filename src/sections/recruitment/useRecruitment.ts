import React from "react";
export const useRecruitment = () => {
  const [activeStep, setActiveStep] = React.useState<any>(0);

  const handleStep = (step: number) => () => {
    setActiveStep(step === activeStep ? null : step);
  };
  return { handleStep, activeStep };
};
