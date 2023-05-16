import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/carer-info/background-checks/statutory-checks-list/reference-1/UploadDocuments";
import PartnerReferenceForm from "@root/sections/carer-info/background-checks/statutory-checks-list/partner-reference/PartnerReferenceForm";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Statutory Check List",
    href: "/carer-info/background-checks/statutory-checks-list",
  },
  {
    name: "References 2",
    href: "",
  },
];

const PAGE_TITLE = "References 2";
Reference2.getLayout = function getLayout(page: any) {
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

export default function Reference2() {
  return (
    <HorizaontalTabs tabsDataArray={["References 1", "Upload Documents"]}>
      <PartnerReferenceForm />
      <UploadDocuments />
    </HorizaontalTabs>
  );
}
