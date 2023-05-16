import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/carer-info/background-checks/statutory-checks-list/employment-reference-2/UploadDocuments";
import EmploymentReferenceTwoForm from "@root/sections/carer-info/background-checks/statutory-checks-list/employment-reference-2/EmploymentReferenceTwoForm";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Statutory Check List",
    href: "/carer-info/background-checks/statutory-checks-list",
  },
  {
    name: "Employment Reference 2",
    href: "",
  },
];

const PAGE_TITLE = "Employment Reference 2";
EmployementReference2.getLayout = function getLayout(page: any) {
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

export default function EmployementReference2() {
  return (
    <HorizaontalTabs
      tabsDataArray={["Employment Reference 2", "Upload Documents"]}
    >
      <EmploymentReferenceTwoForm />
      <UploadDocuments />
    </HorizaontalTabs>
  );
}
