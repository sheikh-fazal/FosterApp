import ComplaintsInfo from "@root/pages/foster-child/child-background-info/child-chronology-of-events/complaints-info";
import HospitalisationInfo from "@root/pages/foster-child/child-background-info/child-chronology-of-events/hospitalisation-info";
import ImmunisationInfo from "@root/pages/foster-child/child-background-info/child-chronology-of-events/immunisation-info";
import IncidentsInfo from "@root/pages/foster-child/child-background-info/child-chronology-of-events/incidents-info";
import VocationalCourseInfo from "@root/pages/foster-child/education-records/vocational-course-info";
import TherapyInfo from "@root/pages/foster-child/health-medical-history/therapy-info";
import RiskAssessment from "@root/pages/foster-child/other-information/risk-assessment";
import AllegationsInfo from "./allegations-info";
import DayLogTable from "./day-log/DayLogTable";
import OOHReportsTable from "./ooh-reports/OOHReportsTable";
import OfstedNotificationsTable from "./ofsted-notifications/OfstedNotificationsTable";
import ChildMissingPlacementTable from "./child-missing-placement/ChildMissingPlacementTable";
import AbsenceInfoTable from "./absence-info/AbsenceInfoTable";
import ExclusiveInfoTable from "./exclusion-info/ExclusionInfoTable";
import ExamGradeInfoTable from "./exam-grade-info/ExamGradeInfoTable";
import VocationalCourseInfoTable from "./vocational-course-info/VocationalCourseInfoTable";

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
    component: <HospitalisationInfo />,
  },
  {
    title: "Therapy Info",
    component: <TherapyInfo />,
  },
  {
    title: "Risk Assessment",
    component: <RiskAssessment />,
  },
  {
    title: "Immunisation Info",
    component: <ImmunisationInfo />,
  },
  {
    title: "Allegations Info",
    component: <AllegationsInfo />,
  },
  {
    title: "Complaints Info",
    component: <ComplaintsInfo />,
  },
  {
    title: "Incidents Info",
    component: <IncidentsInfo />,
  },
];
