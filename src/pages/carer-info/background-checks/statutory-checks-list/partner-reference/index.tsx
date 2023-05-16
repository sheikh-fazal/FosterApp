import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/carer-info/background-checks/statutory-checks-list/partner-reference/UploadDocuments";
import PartnerReferenceForm from "@root/sections/carer-info/background-checks/statutory-checks-list/partner-reference/PartnerReferenceForm";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Statutory Check List",
    href: "/carer-info/background-checks/statutory-checks-list",
  },
  {
    name: "Former Partner Reference",
    href: "",
  },
];

const PAGE_TITLE = "Former Partner References";
PartnerReference.getLayout = function getLayout(page: any) {
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

export default function PartnerReference() {
  return (
    <HorizaontalTabs
      tabsDataArray={["Former Partner References", "Upload Documents"]}
    >
      <PartnerReferenceForm />
      <UploadDocuments />
    </HorizaontalTabs>
  );
}
