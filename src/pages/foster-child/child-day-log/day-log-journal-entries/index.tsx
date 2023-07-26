import Layout from "@root/layouts";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
// import DayLogJournalEntriesTable from "@root/sections/foster-child/child-day-log/day-log-journal-entries/DayLogjournalentriesTable";
import DayLogTable from "@root/sections/foster-child/child-background-info/child-chronology-of-events/day-log/DayLogTable";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------

// Constants
const BREADCRUMBS = (fosterChildId: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child?fosterChildId=${fosterChildId}`,
  },
  {
    name: "Day Log/Journal Entries List",
    href: "",
  },
];

const PAGE_TITLE = "Day Log/Journal Entries";
// ----------------------------------------------------------------------

DayLogJournalEntries.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function DayLogJournalEntries() {
  const router = useRouter();
  const { fosterChildId } = router?.query;
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
      />
      <Paper elevation={3}>
        {/* <DayLogJournalEntriesTable /> */}
        <DayLogTable fosterChildId={fosterChildId} />
      </Paper>
    </Page>
  );
}
