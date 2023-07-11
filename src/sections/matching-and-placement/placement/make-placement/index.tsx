import CarerSelection from "./carer-selection/CarerSelection";
import ChildSelection from "./child-selection/ChildSelection";

export const placementStepData = [
  {
    id: 1,
    label: "Child Selection",
    component: <ChildSelection />,
    background: "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
    color: "rgba(251, 55, 61, 1)",
    // icon: 
  },
  {
    id: 2,
    label: "Carer Selection",
    component: <CarerSelection />,
    background: "linear-gradient(106.35deg, #1A202E 0%, #424E68 100%)",
    color: "rgb(46, 55, 75)",
    // icon: UnCheckIcon
  },
  {
    id: 3,
    label: "Select Placement Type",
    // component: <DeregAssessmentFosteringPanel />,
    background: "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)",
    color: "rgb(246, 163, 15)",
    // icon: AssessmentStageIcon
  },
  {
    id: 4,
    label: "Select Supervising Social Worker",
    // component: <DeregContractsAgreements />,
    background: "linear-gradient(90deg, #2CB764 0%, #0E918C 100%)",
    color: "rgb(29, 164, 120)",
    // icon: UnCheckIcon
  },
  {
    id: 5,
    label: "Select LA SW",
    // component: <FinalDeRegistration />,
    background: "linear-gradient(135deg, #0A6460 0%, #23E0D9 100%)",
    color: "rgb(31, 163, 158)",
    // icon: AssessmentStageIcon
  },
  {
    id: 6,
    label: "Safeguarding Measure ( Before Placement )",
    // component: <FinalDeRegistration />,
    background: "linear-gradient(135deg, #134E5E 0%, #71B280 100%)",
    color: "rgb(66, 128, 111)",
    // icon: AssessmentStageIcon
  },
  {
    id: 7,
    label: "Safeguarding Measure ( During Placement )",
    // component: <FinalDeRegistration />,
    background: "linear-gradient(135deg, #1A202E 0%, #424E68 100%)",
    color: "rgb(46, 55, 75)",
    // icon: AssessmentStageIcon
  },
];
