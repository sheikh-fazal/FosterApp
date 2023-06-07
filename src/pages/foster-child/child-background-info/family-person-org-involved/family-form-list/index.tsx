import React from "react";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import FamilyOrgInvolvedForm from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list/family-form-list/FamilyOrgInvolvedForm";
import { familyPersontableData } from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list";


// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/foster-child/child-background-info/cla-documentation",
  },
  {
    name: "Family Persons & Org Involved List",
    href: "",
  },
];

const PAGE_TITLE = "Family Persons & Org Involved";
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
        <HorizaontalTabs tabsDataArray={["Family Org Involved", "Uploaded documents"]}>

          <FamilyOrgInvolvedForm />
          <UploadDocuments
            readOnly={false}
            searchParam={(searchedText: string) =>
              console.log("searched Value", searchedText)
            }
            tableData={familyPersontableData}
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
