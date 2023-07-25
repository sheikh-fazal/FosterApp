import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { OhDetails } from "@root/sections/carer-info/personal-info/chronology-of-events/ooh-report/ooh-report-form";
import UploadDocuments from "@root/sections/carer-info/personal-info/chronology-of-events/ooh-report/upload-documents/UploadDocuments";
import { useRouter } from "next/router";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "OOH Report List",
    href: "/carer-info/personal-info/carer-chronology-of-events",
  },
  {
    name: "OOH Report",
    href: "",
  },
];

const PAGE_TITLE = "OOH Report";
oohReport.getLayout = function getLayout(page: any) {
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
export default function oohReport() {
  const router: any = useRouter();
  const { action, id } = router.query;
  if (!action && !id) {
    router.push("/carer-info/personal-info/carer-chronology-of-events");
  }
  return (
    <HorizaontalTabs tabsDataArray={["OOH Details", "Upload Documents"]}>
      {/* Oh Details Component */}
      <OhDetails id={id} action={action} />
      {/* Upload Documents Component */}
      <UploadDocuments />
    </HorizaontalTabs>
  );
}
