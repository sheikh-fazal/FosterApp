import HomeIcon from "@mui/icons-material/Home";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
import DayLogjournalentriesListTable from "@root/sections/foster-child/child-day-log/day-log-journal-entries/DayLogjournalentriesList";

// ----------------------------------------------------------------------

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/",
  },
  {
    name: "Day Log/Journal Entries List",
    href: "",
  },
];

const PAGE_TITLE = "Day Log/Journal Entries";
// ----------------------------------------------------------------------

DayLogJournalEntries.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function DayLogJournalEntries() {
  return (
    <Page title={PAGE_TITLE}>
      <Paper elevation={3}>
        <DayLogjournalentriesListTable />
      </Paper>
    </Page>
  );
}

