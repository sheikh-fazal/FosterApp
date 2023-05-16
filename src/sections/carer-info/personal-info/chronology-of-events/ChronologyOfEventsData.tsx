import Allegation from "./allegation/AllegationTable";
import AnnualReview from "./annual-review/AnnualReviewTable";
import Complaints from "./complaints/ComplaintsTable";
import Incident from "./incident/IncidentTable";
import Report from "./ooh-report/ReportTable";
import PetQuestionnaire from "./pet-questionnaire/PetQuestionnaire";
import SupervisoryVisit from "./supervisory-visit/SupervisoryVisit";
import UnannouncedVisit from "./unannounced-visit/UnannouncedVisit";

export const accordionData = [
  {
    title: "Annual Review",
    component: <AnnualReview />,
  },
  {
    title: "Supervisory Home Visit",
    component: <SupervisoryVisit />,
  },
  {
    title: "Unannounced Home Visit",
    component: <UnannouncedVisit />,
  },
  {
    title: "OOH Report",
    component: <Report />,
  },
  {
    title: "Pet Questionnaire",
    component: <PetQuestionnaire />,
  },
  {
    title: "Allegation",
    component: <Allegation />,
  },
  {
    title: "Complaints",
    component: <Complaints />,
  },
  {
    title: "Incident",
    component: <Incident />,
  },
];

//Sorting Mock Data

export const sortingData = [
  {
    value: "Option 1",
  },
  {
    value: "Option 2",
  },
  {
    value: "Option 3",
  },
  {
    value: "Option 4",
  },
];
