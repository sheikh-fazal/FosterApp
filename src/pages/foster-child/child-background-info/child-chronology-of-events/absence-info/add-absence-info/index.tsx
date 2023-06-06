import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AbsenceInfoForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/absence-info/absence-info-child/absence-info-form/AbsenceInfoForm";
import UploadedDocumentsTable from "@root/sections/foster-child/child-background-info/child-chronology-of-events/absence-info/absence-info-child/upload-documents/UploadDocumentsTable";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Absence Info List",
    href: "/foster-child/child-background-info/child-chronology-of-events/absence-info",
  },
  {
    name: "Absence Info",
    href: "",
  },
];

const PAGE_TITLE = "Absence Info";
AbsenceInfoFormLayout.getLayout = function getLayout(page: any) {
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
export default function AbsenceInfoFormLayout() {
  return (
    <HorizaontalTabs tabsDataArray={["Absence Info", "Documents"]}>
   <AbsenceInfoForm/>
   <UploadedDocumentsTable />
    </HorizaontalTabs>
  );
}
