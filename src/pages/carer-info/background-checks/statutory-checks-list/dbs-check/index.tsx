import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import DbsCheckForm from "@root/sections/carer-info/background-checks/statutory-checks-list/dbs-check/DbsCheckForm";
import UploadedDocuments from "@root/sections/carer-info/background-checks/statutory-checks-list/dbs-check/UploadDocuments";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Statutory Check List",
    href: "/carer-info/background-checks/statutory-checks-list",
  },
  {
    name: "Dbs Check",
    href: "",
  },
];

const PAGE_TITLE = "Statutory Check List";
DbsCheck.getLayout = function getLayout(page: any) {
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

export default function DbsCheck() {
  return (
    <HorizaontalTabs tabsDataArray={["DBS Check", "Upload Documents"]}>
      <DbsCheckForm />
      <UploadedDocuments />
    </HorizaontalTabs>
  );
}
