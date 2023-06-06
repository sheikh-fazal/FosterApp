import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { useRouter } from "next/router";
import UploadedDocumentsTable from "@root/sections/foster-child/education-records/leisure-activites-hobby/upload-documents/UploadDocumentsTable";
import LeisureActivitiesForm from "@root/sections/foster-child/education-records/leisure-activites-hobby/LeisureActivitiesForm";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Leisure Activities List",
    href: "/foster-child/education-records/leisure-activities-hobby",
  },
  {
    name: "Leisure Activity",
    href: "",
  },
];

const PAGE_TITLE = "Leisure Activities";
LeisureActivity.getLayout = function getLayout(page: any) {
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
export default function LeisureActivity() {
  return (
    <HorizaontalTabs tabsDataArray={["Leisure Activities", "Upload document"]}>
      <LeisureActivitiesForm />
      <UploadedDocumentsTable />
    </HorizaontalTabs>
  );
}
