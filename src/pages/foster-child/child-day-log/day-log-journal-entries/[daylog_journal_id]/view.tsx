import Layout from "@root/layouts";
import { useRouter } from "next/router";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import DayLogJournalForm from "@root/sections/foster-child/child-day-log/day-log-journal-entries/day-log-journal-form/DayLogJournalForm";
import { useGetDayLogJournalEntriesByIdQuery } from "@root/services/foster-child/child-day-log/DayLogJournalEntriesAPI";
import { DayLogDocument } from "@root/sections/foster-child/child-day-log/day-log-journal-entries/child-day-log-document/DayLogDocument";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/foster-child/child-day-log/day-log-journal-entries",
  },
  {
    name: "Day Log Jopurnal Entries",
    href: "",
  },
];

const PAGE_TITLE = "View Day Log Jopurnal Entries";
// ----------------------------------------------------------------------

ViewDayLogJournalForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ViewDayLogJournalForm() {
  const { query } = useRouter();
  const daylogjournalId = query["daylog_journal_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetDayLogJournalEntriesByIdQuery(daylogjournalId);

  console.log("Is loading: ", data);

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs
        tabsDataArray={["Day Log Jopurnal", "Uploaded documents"]}
      >
        {/* Family Person Form */}
        {isLoading && <p>Loading...</p>}
        {isSuccess && <DayLogJournalForm defaultValues={data[0]} />}

        {/* Upload Document */}
        <DayLogDocument />
      </HorizaontalTabs>
    </Page>
  );
}
