import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AbsenceInfoForm from "@root/sections/foster-child/education-records/absence-info/absence-info-child/absence-info-form/AbsenceInfoForm";
import UploadedDocumentsTable from "@root/sections/foster-child/education-records/absence-info/absence-info-child/upload-documents/UploadDocumentsTable";
import { useRouter } from "next/router";
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Absence Info List",
    href: "/foster-child/education-records/absence-info",
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
  const router = useRouter();
  const { action, id } = router.query;
  if (!action && !id) {
    router.push("/foster-child/education-records/absence-info");
  }
  return (
    <HorizaontalTabs tabsDataArray={["Absence Info", "Documents"]}>
      <AbsenceInfoForm action={action} id={id} />
      <UploadedDocumentsTable />
    </HorizaontalTabs>
  );
}
