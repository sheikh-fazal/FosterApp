import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/carer-info/background-checks/statutory-checks-list/employment-reference-1/EmployementReferenceOneTable";
import EmploymentReferenceOneForm from "@root/sections/carer-info/background-checks/statutory-checks-list/employment-reference-1/EmploymentReferenceOneForm";

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

const PAGE_TITLE = "Employment Reference 1";
EmployementReference1.getLayout = function getLayout(page: any) {
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

export default function EmployementReference1() {
  return (
    <HorizaontalTabs
      tabsDataArray={["Employment Reference 1", "Upload Documents"]}
    >
      <EmploymentReferenceOneForm />
      <UploadDocuments />
    </HorizaontalTabs>
  );
}
