import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";

import { useRouter } from "next/router";
import AllegationForm from "@root/sections/carer-info/personal-info/chronology-of-events/allegation/allegation-form/AllegationForm";
import UploadedDocumentsTable from "@root/sections/foster-child/child-background-info/child-chronology-of-events/absence-info/upload-documents/UploadDocumentsTable";

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
AbsenceInfoForm.getLayout = function getLayout(page: any) {
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
export default function AbsenceInfoForm() {
  return (
    <HorizaontalTabs tabsDataArray={["Absence Info", "Documents"]}>
      <AllegationForm />
      <UploadedDocumentsTable />
    </HorizaontalTabs>
  );
}
