import DayLogTable from "./day-log/DayLogTable";
import OOHReportsTable from "./ooh-reports/OOHReportsTable";
import OfstedNotificationsTable from "./ofsted-notifications/OfstedNotificationsTable";
import ChildMissingPlacementTable from "./child-missing-placement/ChildMissingPlacementTable";
import AbsenceInfoTable from "./absence-info/AbsenceInfoTable";
import ExclusiveInfoTable from "./exclusion-info/ExclusionInfoTable";
import ExamGradeInfoTable from "./exam-grade-info/ExamGradeInfoTable";
import VocationalCourseInfoTable from "./vocational-course-info/VocationalCourseInfoTable";
import HospitalisationInfoTable from "./hospitalisation-info/HospitalisationInfoTable";
import TherapyInfoTable from "./therapy-info/TherapyInfoTable";
import RiskAssessmentTable from "./risk-assessment/RiskAssessmentTable";
import ImmunisationInfoTable from "./immunisation-info/ImmunisationInfoTable";
import AllegationsInfoTable from "./allegations-info/AllegationsInfoTable";
import ComplaintsInfoTable from "./complaints-info/ComplaintsInfoTable";
import IncidentsInfoTable from "./incidents-info/IncidentsInfoTable";

export const childChronologyListData = [
  {
    title: "Day Log / Journal Entries",
    component: <DayLogTable />,
  },
  {
    title: "OOH Reports",
    component: <OOHReportsTable />,
  },
  {
    title: "Ofsted Notifications",
    component: <OfstedNotificationsTable />,
  },
  {
    title: "Child Missing Placement",
    component: <ChildMissingPlacementTable />,
  },
  {
    title: "Absence Info",
    component: <AbsenceInfoTable />,
  },
  {
    title: "Exclusion Info",
    component: <ExclusiveInfoTable />,
  },
  {
    title: "SATS / Exam / Grades Info",
    component: <ExamGradeInfoTable />,
  },
  {
    title: "Vocational Course Info",
    component: <VocationalCourseInfoTable />,
  },
  {
    title: "Hospitalisation Info",
    component: <HospitalisationInfoTable/>,
  },
  {
    title: "Therapy Info",
    component: <TherapyInfoTable />,
  },
  {
    title: "Risk Assessment",
    component: <RiskAssessmentTable />,
  },
  {
    title: "Immunisation Info",
    component: <ImmunisationInfoTable />,
  },
  {
    title: "Allegations Info",
    component: <AllegationsInfoTable />,
  },
  {
    title: "Complaints Info",
    component: <ComplaintsInfoTable />,
  },
  {
    title: "Incidents Info",
    component: <IncidentsInfoTable />,
  },
];
