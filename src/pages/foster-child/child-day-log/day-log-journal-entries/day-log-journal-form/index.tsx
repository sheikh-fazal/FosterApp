import React from "react";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import DayLogJournalForm from "@root/sections/foster-child/child-day-log/day-log-journal-entries/day-log-journal-form/DayLogJournalForm";
import { DayLogjournalentriesListTableData } from "@root/sections/foster-child/child-day-log/day-log-journal-entries";


// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Day Log/Journal Entries List",
    href: "/foster-child/child-day-log/day-log-journal-entries",
  },
  {
    name: "Day Log / Journal Entry",
    href: "",
  },
];

const PAGE_TITLE = "Day Log/Journal Entries";
// ----------------------------------------------------------------------

FamilyPersonList.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function FamilyPersonList() {

  return (
    <Page title={PAGE_TITLE}>
      <Paper elevation={3}>
        <HorizaontalTabs tabsDataArray={["Day Log Journal", "Uploaded documents"]}>

          <DayLogJournalForm />
          <UploadDocuments
            readOnly={false}
            searchParam={(searchedText: string) =>
              console.log("searched Value", searchedText)
            }
            tableData={DayLogjournalentriesListTableData}
            isLoading={false}
            isFetching={false}
            isError={false}
            isSuccess={true}
            column={["document", "documentType", "date", "personName", "password"]}
            onPageChange={(page: any) => console.log("parent log", page)}
          />

        </HorizaontalTabs>

      </Paper>
    </Page>
  );
}
