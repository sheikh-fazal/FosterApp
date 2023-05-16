import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/carer-info/background-checks/statutory-checks-list/local-authority/UploadDocuments";
import LocalAuthorityForm from "@root/sections/carer-info/background-checks/statutory-checks-list/local-authority/LocalAuthorityForm";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Statutory Check List",
    href: "/carer-info/background-checks/statutory-checks-list",
  },
  {
    name: "Local Authority",
    href: "",
  },
];

const PAGE_TITLE = "Local Authority S.S.D";
LocalAuthority.getLayout = function getLayout(page: any) {
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

export default function LocalAuthority() {
  return (
    <HorizaontalTabs
      tabsDataArray={["Local Authority S.S.D", "Upload Documents"]}
    >
      <LocalAuthorityForm />
      <UploadDocuments />
    </HorizaontalTabs>
  );
}
