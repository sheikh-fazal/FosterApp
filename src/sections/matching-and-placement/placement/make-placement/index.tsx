import CarerSelection from "./carer-selection/CarerSelection";
import ChildSelection from "./child-selection/ChildSelection";
import FinalPlacementApprovalDeclarations from "./final-placement-approval-declarations/FinalPlacementApprovalDeclarations";
import FinanceAgreementCarer from "./finance-agreement-carer/FinanceAgreementCarer";
import MandatoryTraining from "./mandatory-training/MandatoryTraining";
import PlacementMeetingRecordTable from "./placement-meeting-record/PlacementMeetingRecordTable";
import SafeguardingMeasureBeforeTable from "./safeguarding-measure-before-placement/SafeguardingMeasureBeforeTable";
import SafeguardingMeasureDurationTable from "./safeguarding-measure-duration-placement/SafeguardingMeasureDurationTable";
import { SelectLASW } from "./select-la-sw";
import { SelectPlacementType } from "./select-placement-type";
import { SelectSupervisingSocialWorker } from "./select-supervising-social-worker";


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
    component: <SelectPlacementType/>,
    background: "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)",
    color: "rgb(246, 163, 15)",
    // icon: AssessmentStageIcon
  },
  {
    id: 4,
    label: "Select Supervising Social Worker",
    component: <SelectSupervisingSocialWorker/>,
    background: "linear-gradient(90deg, #2CB764 0%, #0E918C 100%)",
    color: "rgb(29, 164, 120)",
    // icon: UnCheckIcon
  },
  {
    id: 5,
    label: "Select LA SW",
    component: <SelectLASW/>,
    background: "linear-gradient(135deg, #0A6460 0%, #23E0D9 100%)",
    color: "rgb(14, 163, 154, 1)",
    // icon: AssessmentStageIcon
  },
  {
    id: 6,
    label: "Safeguarding Measure ( Before Placement )",
    component: <SafeguardingMeasureBeforeTable/>,
    background: "linear-gradient(135deg, #134E5E 0%, #71B280 100%)",
    color: "rgb(67, 129, 114)",
    // icon: AssessmentStageIcon
  },
  {
    id: 7,
    label: "Safeguarding Measure ( During Placement )",
    component: <SafeguardingMeasureDurationTable/>,
    background: "linear-gradient(135deg, #1A202E 0%, #424E68 100%)",
    color: "rgb(46, 55, 75)",
    // icon: AssessmentStageIcon
  },
  {
    id: 8,
    label: "Mandatory Training",
    component: <MandatoryTraining/>,
    background: "linear-gradient(135deg, #4B79A1 0%, #283E51 100%)",
    color: "rgb(57, 90, 122)",
    // icon: AssessmentStageIcon
  },
  {
    id: 9,
    label: "Placement Meeting record",
    component: <PlacementMeetingRecordTable/>,
    background: "linear-gradient(143deg, #F6830F 0%, #DC3545 100%)",
    color: "rgb(233,93,42)",
    // icon: AssessmentStageIcon
  },
  {
    id: 10,
    label: "Placement Special Needs agreement",
    // component: <FinalDeRegistration />,
    background: "linear-gradient(135deg, #F6460F 0%, #FE2B5E 100%)",
    color: "rgb(250,56,54)",
    // icon: AssessmentStageIcon
  },
  {
    id: 11,
    label: "Finance Agreement with  Local Authority",
    // component: <FinalDeRegistration />,
    background: "linear-gradient(90deg, #2CB764 0%, #0E918C 100%)",
    color: "rgb(29,164,120)",
    // icon: AssessmentStageIcon
  },
  {
    id: 12,
    label: "Placement Agreement  with Carer",
    // component: <FinalDeRegistration />,
    background: "linear-gradient(135deg, #0A6460 0%, #23E0D9 100%)",
    color: "rgb(20,164,157)",
    // icon: AssessmentStageIcon
  },
  {
    id: 13,
    label: "Finance Agreement with Carer",
    component: <FinanceAgreementCarer />,
    background: "linear-gradient(233deg, #CB236D 0%, #4C246D 100%)",
    color: "rgb(139,35,109)",
    // icon: AssessmentStageIcon
  },
  {
    id: 14,
    label: "Final Placement Approval / Declarations",
    component: <FinalPlacementApprovalDeclarations />,
    background: "linear-gradient(135deg, #F6830F 0%, #F6C30F 100%)",
    color: "rgb(246,163,15)",
    // icon: AssessmentStageIcon
  },
];
