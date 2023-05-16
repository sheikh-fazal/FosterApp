import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UnannouncedHomeVisit from "@root/sections/carer-info/personal-info/chronology-of-events/unannounced-visit/unannounced-home-visit/UnannouncedHomeVisit";
import UploadDocuments from "@root/sections/carer-info/personal-info/chronology-of-events/unannounced-visit/upload-documents/UploadDocuments";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Unannounced Home Visit",
    href: "/carer-info/personal-info/carer-chronology-of-events",
  },
  {
    name: "Unannounced Home Visit List",
    href: "",
  },
];

const PAGE_TITLE = "Unannounced Home Visit";
UnannouncedVisit.getLayout = function getLayout(page: any) {
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
export default function UnannouncedVisit() {
  // -------
  return (
    <HorizaontalTabs
      tabsDataArray={["Unannounced Home Visit", "Upload Documents"]}
    >
      {/* Unannounced Home Visit Component */}
      <UnannouncedHomeVisit />
      {/* Upload Documents Components */}
      <UploadDocuments />
    </HorizaontalTabs>
  );
}
