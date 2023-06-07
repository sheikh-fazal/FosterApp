import Layout from "@root/layouts";
import DayLogForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/day-log/DayLogForm";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import ChildChronologyOfEventsDocumentsTable from "@root/sections/foster-child/child-background-info/child-chronology-of-events/documents/ChildChronologyOfEventsDocumentsTable";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Chronology of Events",
    href: "/foster-child/child-background-info/child-chronology-of-events",
  },
  {
    name: "Day Log / Journal Entries",
    href: "",
  },
];

const PAGE_TITLE = "Day Log / Journal Entires";
DayLog.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function DayLog() {
  return (
    <HorizaontalTabs tabsDataArray={["Day Log / Journal Entries", "Documentss"]}>
      <DayLogForm />
      <ChildChronologyOfEventsDocumentsTable />
    </HorizaontalTabs>
  );
}
