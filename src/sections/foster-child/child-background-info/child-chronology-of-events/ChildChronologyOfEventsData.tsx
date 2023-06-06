import ComplaintsInfo from "@root/pages/foster-child/child-background-info/child-chronology-of-events/complaints-info";
import ExclusionInfo from "@root/pages/foster-child/child-background-info/child-chronology-of-events/exclusion-info";
import HospitalisationInfo from "@root/pages/foster-child/child-background-info/child-chronology-of-events/hospitalisation-info";
import ImmunisationInfo from "@root/pages/foster-child/child-background-info/child-chronology-of-events/immunisation-info";
import IncidentsInfo from "@root/pages/foster-child/child-background-info/child-chronology-of-events/incidents-info";
import OfstedNotifications from "@root/pages/foster-child/child-background-info/child-chronology-of-events/ofsted-notifications";
import SATSExam from "@root/pages/foster-child/child-background-info/child-chronology-of-events/sats-exam";
import AbsenceInfo from "@root/pages/foster-child/education-records/absence-info";
import VocationalCourseInfo from "@root/pages/foster-child/education-records/vocational-course-info";
import ChildMissingPlacement from "@root/pages/foster-child/events-and-notification/child-missing-placement";
import TherapyInfo from "@root/pages/foster-child/health-medical-history/therapy-info";
import RiskAssessment from "@root/pages/foster-child/other-information/risk-assessment";
import AllegationsInfo from "./allegations-info";
import DayLogTable from "./day-log/DayLogTable";
import OOHReportsTable from "./ooh-reports";

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
    component: <OfstedNotifications />,
  },
  {
    title: "Child Missing Placement",
    component: <ChildMissingPlacement />,
  },
  {
    title: "Absence Info",
    component: <AbsenceInfo />,
  },
  {
    title: "Exclusion Info",
    component: <ExclusionInfo />,
  },
  {
    title: "SATS / Exam / Grades Info",
    component: <SATSExam />,
  },
  {
    title: "Vocational Course Info",
    component: <VocationalCourseInfo />,
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
